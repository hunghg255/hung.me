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
