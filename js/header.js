(function headerScript(Drupal) {
  Drupal.behaviors.micrositeHeader = {
    attach: function (context, settings) {
      context = context || document;

      const offCanvas = context.querySelector("#off-canvas");
      const offCanvasToggle = context.querySelector(
        ".microsite-header__off-canvas-toggle"
      );
      const offCanvasClose = context.querySelector('.off-canvas__close');
      console.log(offCanvasClose);

      function toggleStates() {
        toggleState = offCanvasToggle.getAttribute("aria-expanded");
        offCanvasState = offCanvas.getAttribute("data-expanded");
      }

      function handleOffCanvas() {
        toggleStates();
        if (toggleState === 'true' || offCanvasState === 'true') {
          handleCloseOffCanvas();
        } else {
          handleOpenOffCanvas();
        }
      }

      function handleOpenOffCanvas() {
        toggleStates();
        offCanvasToggle.setAttribute("aria-expanded", "true");
        offCanvas.setAttribute("data-expanded", "true");
        const focusable = offCanvas.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusable[0].focus();
      }

      function handleCloseOffCanvas() {
        toggleStates();
        offCanvasToggle.focus();
        offCanvasToggle.setAttribute("aria-expanded", "false");
        offCanvas.setAttribute("data-expanded", "false");
      }

      if (!offCanvasToggle) {
        return;
      } else {
        offCanvasToggle.addEventListener("click", handleOffCanvas);
        window.addEventListener("keyup", function (e) {
          if (e.code === "Escape") {
            handleCloseOffCanvas();
          }
        });
      }
      offCanvasClose.addEventListener('click', () => {
        handleCloseOffCanvas();
      })
    },
  };
})(Drupal);
