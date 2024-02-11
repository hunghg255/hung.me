function easeInOutSine(t: number, b: number, c: number, d: number) {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}

export const scrollToElement = (element: HTMLElement) => {
  const elementPosition = element.getBoundingClientRect().top - 40;
  const startPosition = window.pageYOffset;
  let startTime = 0;
  const duration = 500;

  function animate(currentTime: number) {
    if (!startTime) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;

    const run = easeInOutSine(timeElapsed, startPosition, elementPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
};

export const onGotoElement = (idElement: string) => {
  const element = document.querySelector(`#${idElement}`) as HTMLElement;
  element && scrollToElement(element);
};

export function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

export function toggleDark(event: MouseEvent) {
  const isAppearanceTransition =
    // @ts-expect-error: Transition API
    document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //@ts-ignore
  const isToggle = localStorage.getItem('data-theme') === 'dark';

  const onSetTheme = () => {
    if (isToggle === false) {
      localStorage?.setItem('data-theme', 'dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      // delete document.documentElement.dataset.theme;
      localStorage?.setItem('data-theme', 'light');
      document.documentElement.dataset.theme = 'light';
    }
  };

  if (!isAppearanceTransition) {
    onSetTheme();

    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(onSetTheme);

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

    document.documentElement.animate(
      {
        clipPath: isToggle ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isToggle ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    );
  });
}
