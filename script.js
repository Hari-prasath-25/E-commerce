<script>
  document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();

    const footer = document.getElementById('footer');
    const yOffset = -60; // Adjust for fixed navbar height
    const targetY = footer.getBoundingClientRect().top + window.pageYOffset + yOffset;

    smoothScrollTo(window.pageYOffset, targetY, 1500); // 1500ms = 1.5 seconds
  });

  function smoothScrollTo(startY, endY, duration) {
    const distance = endY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
  }
</script>

