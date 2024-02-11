'use client';

/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React, { memo, useCallback, useEffect, useState } from 'react';

const colorSchemes = new Set(['light', 'dark']);
const MEDIA = '(prefers-color-scheme: dark)';
const isServer = typeof window === 'undefined';
const defaultThemes = ['light', 'dark'];

// Helpers
const getTheme = (key: string, fallback?: string) => {
  if (isServer) {
    return undefined;
  }
  let theme;
  try {
    theme = localStorage.getItem(key) || undefined;
  } catch {
    // Unsupported
  }
  return theme || fallback;
};

const disableAnimation = () => {
  const css = document.createElement('style');
  css.append(
    document.createTextNode(
      '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
    ),
  );
  document.head.append(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      css.remove();
    }, 1);
  };
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) {
    e = window.matchMedia(MEDIA);
  }
  const isDark = e.matches;
  const systemTheme = isDark ? 'dark' : 'light';
  return systemTheme;
};

const ThemeScript = memo(
  ({
    forcedTheme,
    storageKey,
    attribute,
    enableSystem,
    enableColorScheme,
    defaultTheme,
    value,
    attrs,
    nonce,
  }: any) => {
    const defaultSystem = defaultTheme === 'system';

    // Code-golfing the amount of characters in the script
    const optimization = (() => {
      if (attribute === 'class') {
        const removeClasses = `c.remove(${attrs.map((t: string) => `'${t}'`).join(',')})`;

        return `var d=document.documentElement,c=d.classList;${removeClasses};`;
      } else {
        return `var d=document.documentElement,n='${attribute}',s='setAttribute';`;
      }
    })();

    const fallbackColorScheme = (() => {
      if (!enableColorScheme) {
        return '';
      }

      const fallback = colorSchemes.has(defaultTheme) ? defaultTheme : undefined;

      return fallback
        ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${defaultTheme}'`
        : "if(e==='light'||e==='dark')d.style.colorScheme=e";
    })();

    const updateDOM = (name: string, literal: boolean = false, setColorScheme = true) => {
      const resolvedName = value ? value[name] : name;
      const val = literal ? name + "|| ''" : `'${resolvedName}'`;
      let text = '';

      // MUCH faster to set colorScheme alongside HTML attribute/class
      // as it only incurs 1 style recalculation rather than 2
      // This can save over 250ms of work for pages with big DOM
      if (enableColorScheme && setColorScheme && !literal && colorSchemes.has(name)) {
        text += `d.style.colorScheme = '${name}';`;
      }

      if (attribute === 'class') {
        text += literal || resolvedName ? `c.add(${val})` : 'undefined';
      } else if (resolvedName) {
        text += `d[s](n,${val})`;
      }

      return text;
    };

    const scriptSrc = (() => {
      if (forcedTheme) {
        return `!function(){${optimization}${updateDOM(forcedTheme)}}()`;
      }

      if (enableSystem) {
        return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if('system'===e||(!e&&${defaultSystem})){var t='${MEDIA}',m=window.matchMedia(t);if(m.media!==t||m.matches){${updateDOM(
          'dark',
        )}}else{${updateDOM('light')}}}else if(e){${
          value ? `var x=${JSON.stringify(value)};` : ''
        }${updateDOM(value ? 'x[e]' : 'e', true)}}${
          defaultSystem ? '' : 'else{' + updateDOM(defaultTheme, false, false) + '}'
        }${fallbackColorScheme}}catch(e){}}()`;
      }

      return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if(e){${
        value ? `var x=${JSON.stringify(value)};` : ''
      }${updateDOM(value ? 'x[e]' : 'e', true)}}else{${updateDOM(
        defaultTheme,
        false,
        false,
      )};}${fallbackColorScheme}}catch(t){}}();`;
    })();

    return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />;
  },
  () => true,
);

export const ThemeConfig = ({
  forcedTheme = false,
  disableTransitionOnChange = false,
  enableSystem = false,
  enableColorScheme = false,
  storageKey = 'theme',
  themes = defaultThemes,
  defaultTheme = enableSystem ? 'system' : 'light',
  attribute = 'data-theme',
  value,
  nonce,
}: any) => {
  const [theme, setThemeState] = useState(() => getTheme(storageKey, defaultTheme));
  const [, setResolvedTheme] = useState(() => getTheme(storageKey));
  const attrs = value ? Object.values(value) : themes;

  const applyTheme = useCallback((theme: any) => {
    let resolved = theme;

    if (!resolved) {
      return;
    }

    // If theme is system, resolve it before setting theme
    if (theme === 'system' && enableSystem) {
      resolved = getSystemTheme();
    }

    const name = value ? value[resolved] : resolved;
    const enable = disableTransitionOnChange ? disableAnimation() : undefined;
    const d = document.documentElement;

    if (attribute === 'class') {
      d.classList.remove(...attrs);

      if (name) {
        d.classList.add(name);
      }
    } else if (name) {
      d.setAttribute(attribute, name);
    } else {
      d.removeAttribute(attribute);
    }

    if (enableColorScheme) {
      const fallback = colorSchemes.has(defaultTheme) ? defaultTheme : undefined;
      const colorScheme = colorSchemes.has(resolved) ? resolved : fallback;
      // @ts-ignore
      d.style.colorScheme = colorScheme;
    }

    enable?.();
  }, []);

  const setTheme = useCallback(
    (theme: any) => {
      const newTheme = typeof theme === 'function' ? theme(theme) : theme;
      setThemeState(newTheme);

      // Save to storage
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Unsupported
      }
    },
    [forcedTheme],
  );

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e);
      setResolvedTheme(resolved);

      if (theme === 'system' && enableSystem && !forcedTheme) {
        applyTheme('system');
      }
    },
    [theme, forcedTheme],
  );

  // Always listen to System preference
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === undefined (happens on local storage manual deletion)
      const theme = e.newValue || defaultTheme;
      setTheme(theme);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setTheme]);

  // Whenever theme or forcedTheme changes, apply it
  useEffect(() => {
    applyTheme(forcedTheme ?? theme);
  }, [forcedTheme, theme]);

  // const providerValue = useMemo(
  //   () => ({
  //     theme,
  //     setTheme,
  //     forcedTheme,
  //     resolvedTheme: theme === 'system' ? resolvedTheme : theme,
  //     themes: enableSystem ? [...themes, 'system'] : themes,
  //     systemTheme: (enableSystem ? resolvedTheme : undefined) as 'light' | 'dark' | undefined,
  //   }),
  //   [theme, setTheme, forcedTheme, resolvedTheme, enableSystem, themes],
  // );

  return (
    <ThemeScript
      {...{
        forcedTheme,
        disableTransitionOnChange,
        enableSystem,
        enableColorScheme,
        storageKey,
        themes,
        defaultTheme,
        attribute,
        value,
        attrs,
        nonce,
      }}
    />
  );
};
