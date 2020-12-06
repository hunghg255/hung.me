const scrollToElement = (element: HTMLElement) => {
  const elementPosition = element.getBoundingClientRect().top - 40;
  const startPosition = window.pageYOffset;
  let startTime = 0;
  const duration = 500;

  function animate(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = easeInOutSine(
      timeElapsed,
      startPosition,
      elementPosition,
      duration,
    );
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function easeInOutSine(t: number, b: number, c: number, d: number) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }

  requestAnimationFrame(animate);
};

export { scrollToElement };
