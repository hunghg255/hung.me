import React, { useEffect, useRef, useState } from 'react';

let MOUSE_LOCS_TRACKED = 3; // number of past mouse locations to trackv
let DELAY = 300; // ms delay when user appears to be entering submenu
let TOLERANCE = 75; // bigger = more forgivey when entering submenu
// Consider multiple instance using ReactMenuAim, we just listen mousemove once
let mouseLocs = [];
let __reactMenuAimTimer;

/**
 *
 * DOM helpers
 *
 */
function on(el, eventName, callback) {
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback) {
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback);
  } else if (el.detachEvent) {
    el.detachEvent('on' + eventName, callback);
  }
}

function offset(el) {
  if (!el) {
    return {
      left: 0,
      top: 0,
    };
  }

  let rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft,
  };
}

function outerWidth(el) {
  let _width = el.offsetWidth;
  let style = el.currentStyle || getComputedStyle(el);

  _width += parseInt(style.marginLeft, 10) || 0;
  return _width;
}

function outerHeight(el) {
  let _height = el.offsetHeight;
  let style = el.currentStyle || getComputedStyle(el);

  _height += parseInt(style.marginLeft, 10) || 0;
  return _height;
}

/**
 *
 * Util helpers
 *
 */

// Mousemove handler on document
function handleMouseMoveDocument(e) {
  mouseLocs.push({
    x: e.pageX,
    y: e.pageY,
  });

  if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
    mouseLocs.shift();
  }
}

function getActivateDelay(config) {
  config = config || {};
  let menu = document.querySelector(config.menuSelector);

  // If can't find any DOM node
  if (!menu || !menu.querySelector) {
    return 0;
  }

  let menuOffset = offset(menu);

  let upperLeft = {
    x: menuOffset.left,
    y: menuOffset.top - (config.tolerance || TOLERANCE),
  };
  let upperRight = {
    x: menuOffset.left + outerWidth(menu),
    y: upperLeft.y,
  };
  let lowerLeft = {
    x: menuOffset.left,
    y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE),
  };
  let lowerRight = {
    x: menuOffset.left + outerWidth(menu),
    y: lowerLeft.y,
  };

  let loc = mouseLocs[mouseLocs.length - 1];
  let prevLoc = mouseLocs[0];

  if (!loc) {
    return 0;
  }

  if (!prevLoc) {
    prevLoc = loc;
  }

  // If the previous mouse location was outside of the entire
  // menu's bounds, immediately activate.
  if (
    prevLoc.x < menuOffset.left ||
    prevLoc.x > lowerRight.x ||
    prevLoc.y < menuOffset.top ||
    prevLoc.y > lowerRight.y
  ) {
    return 0;
  }

  // If the mouse hasn't moved since the last time we checked
  // for activation status, immediately activate.
  if (
    this._lastDelayDoc &&
    loc.x === this._lastDelayDoc.x &&
    loc.y === this._lastDelayDoc.y
  ) {
    return 0;
  }

  function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
  }

  let decreasingCorner = upperRight;
  let increasingCorner = lowerRight;

  if (config.submenuDirection === 'left') {
    decreasingCorner = lowerLeft;
    increasingCorner = upperLeft;
  } else if (config.submenuDirection === 'below') {
    decreasingCorner = lowerRight;
    increasingCorner = lowerLeft;
  } else if (config.submenuDirection === 'above') {
    decreasingCorner = upperLeft;
  }

  let decreasingSlope = slope(loc, decreasingCorner);
  let increasingSlope = slope(loc, increasingCorner);
  let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
  let prevIncreasingSlope = slope(prevLoc, increasingCorner);

  if (
    decreasingSlope < prevDecreasingSlope &&
    increasingSlope > prevIncreasingSlope
  ) {
    this._lastDelayLoc = loc;
    return config.delay || DELAY;
  }

  this._lastDelayLoc = null;
  return 0;
}

function activate(rowIdentifier, handler, config) {
  handler.call(this, rowIdentifier);

  const subMenu = document.querySelector(config.classPopup);
  if (subMenu) subMenu.classList.add(config.classPopupActive);
}

function possiblyActivate(rowIdentifier, handler, config) {
  let delay = getActivateDelay.call(this, config);

  if (delay) {
    let self = this;
    __reactMenuAimTimer = setTimeout(function () {
      possiblyActivate.call(self, rowIdentifier, handler, config);
    }, delay);
  } else {
    if (__reactMenuAimTimer) {
      clearTimeout(__reactMenuAimTimer);
      __reactMenuAimTimer = null;
      return;
    }
    activate.call(this, rowIdentifier, handler, config);
  }
}

/**
 * @export
 */

const menuAim = function (options) {
  const __reactMenuAimConfig = options;
  const menu: any = document.querySelector(options.menuSelector);

  const handleMouseEnterRow = function (rowIdentifier, handler) {
    if (__reactMenuAimTimer) {
      clearTimeout(__reactMenuAimTimer);
      __reactMenuAimTimer = null;
      return;
    }

    possiblyActivate.call(this, rowIdentifier, handler, __reactMenuAimConfig);
  };

  const handleOnMouseLeave = () => {
    const subMenu = document.querySelector(options.classPopup);
    const itemActive = document.querySelector(`.${options.classItemActive}`);
    subMenu && subMenu.classList.remove(options.classPopupActive);
    itemActive && itemActive.classList.remove(options.classItemActive);

    if (__reactMenuAimTimer) {
      clearTimeout(__reactMenuAimTimer);
    }
    __reactMenuAimTimer = null;
  };

  const onDidmount = () => {
    handleOnMouseLeave();
    off(document, 'mousemove', handleMouseMoveDocument);
    off(menu, 'mouseleave', handleOnMouseLeave);
  };

  on(document, 'mousemove', handleMouseMoveDocument);

  on(menu, 'mouseleave', handleOnMouseLeave);

  return {
    handleMouseEnterRow,
    onDidmount,
  };
};

const list = [
  {
    id: 1,
    name: 'foo',
    child: [
      {
        name: 'foo child',
      },
    ],
  },
  {
    id: 2,
    name: 'bazz',
    child: [
      {
        name: 'bazz child',
      },
    ],
  },
  {
    id: 3,
    name: 'fizzz',
    child: [
      {
        name: 'fizz child',
      },
    ],
  },
  {
    id: 4,
    name: 'fizzz4',
    child: [
      {
        name: 'fizz4 child',
      },
    ],
  },
  {
    id: 5,
    name: 'fizzz5',
    child: [
      {
        name: 'fizz5 child',
      },
    ],
  },
];

const Menu = () => {
  const [itemActive, setItemActive] = useState<any>();
  const refMenu: any = useRef();

  useEffect(() => {
    refMenu.current = menuAim({
      submenuDirection: 'right',
      menuSelector: '.menu-container',
      delay: 500,
      tolerance: 75,
      classItemActive: 'menu-aim__item--active',
      classPopup: '.menu-aim__item-submenu',
      classPopupActive: 'menu-aim__item-submenu--active',
    });
  }, []);

  const onSetItemActive = (it) => {
    it?.evt?.target?.classList?.add('menu-aim__item--active');
    setItemActive(it.item);
  };

  const onMouseEnter = (item) => (evt: any) => {
    if (refMenu.current?.handleMouseEnterRow)
      refMenu.current?.handleMouseEnterRow({ item, evt }, onSetItemActive);
  };

  return (
    <div className='menu-container right'>
      <ul className='menu-aim'>
        <li className='menu-aim__item'>
          <a className='menu-aim__item-name' href='#'>
            foo
          </a>
          <ul className='menu-aim__item-submenu'>
            <li>
              <a href='#'>fooo</a>
            </li>
            <li>
              <a href='#'>foooo</a>
            </li>
            <li>
              <a href='#'>fooooo</a>
            </li>
            <li>
              <a href='#'>foooooo</a>
            </li>
            <li>
              <a href='#'>fooooooo</a>
            </li>
            <li>
              <a href='#'>foooooooo</a>
            </li>
          </ul>
        </li>
        <li className='menu-aim__item'>
          <a className='menu-aim__item-name' href='#'>
            bar
          </a>
          <ul className='menu-aim__item-submenu'>
            <li>
              <a href='#'>baar</a>
            </li>
            <li>
              <a href='#'>baaar</a>
            </li>
            <li>
              <a href='#'>baaaar</a>
            </li>
            <li>
              <a href='#'>baaaaar</a>
            </li>
            <li>
              <a href='#'>baaaaaar</a>
            </li>
            <li>
              <a href='#'>baaaaaaar</a>
            </li>
          </ul>
        </li>
        <li className='menu-aim__item'>
          <a className='menu-aim__item-name' href='#'>
            baz
          </a>
          <ul className='menu-aim__item-submenu'>
            <li>
              <a href='#'>baaz</a>
            </li>
            <li>
              <a href='#'>baaaz</a>
            </li>
            <li>
              <a href='#'>baaaaz</a>
            </li>
            <li>
              <a href='#'>baaaaaz</a>
            </li>
            <li>
              <a href='#'>baaaaaaz</a>
            </li>
            <li>
              <a href='#'>baaaaaaaz</a>
            </li>
            <li>
              <a href='#'>baaaaaaaaz</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
