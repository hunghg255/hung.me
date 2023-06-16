declare const window: any;

export const pageview = (url: any) => {
  try {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  } catch {}
};
