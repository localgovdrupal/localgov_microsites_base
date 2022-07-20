(function menuScript(Drupal) {
  Drupal.behaviors.menu = {
    attach: function (context, settings) {
      context = context || document;
      const subMenuToggles = Array.from(context.querySelectorAll('.menu__sub-menu-toggle'));
      const topLevelMenuItems = context.querySelectorAll('.menu-item--level-0');

      function handleSubMenuToggle(subMenuToggle) {
        subMenuToggle.removeAttribute('hidden');
        const subMenu = subMenuToggle.nextElementSibling;
        subMenuToggle.addEventListener('click', function() {
          const topLevelMenuItem = subMenuToggle.closest('.menu-item--level-0');
          const topLevelIndex = topLevelMenuItem.dataset.index;
          const parentMenu = topLevelMenuItem.closest('.menu');
          const siblings = Array.from(parentMenu.querySelectorAll('li:not(li li)'));
          siblings.forEach(sibling => {
            if (sibling.dataset.index != topLevelIndex) {
              const toggles = sibling.querySelectorAll('.menu__sub-menu-toggle');
              toggles.forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.nextElementSibling.style.display = 'none';
              });
            }
          });
          
          const expanded = subMenuToggle.getAttribute('aria-expanded');
          if (expanded === 'false') {
            subMenu.style.display = 'block';
            subMenuToggle.setAttribute('aria-expanded', 'true');
          } else {
            subMenuToggle.setAttribute('aria-expanded', 'false');
            subMenuToggle.nextElementSibling.style.display = 'none';
          }
          const nestedMenuToggles = subMenu.querySelectorAll('.menu__sub-menu-toggle');
          nestedMenuToggles.forEach(toggle => {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.nextElementSibling.style.display = 'none';
          });

          topLevelMenuItems.forEach(item => {
            item.addEventListener('mouseleave', function() {
              subMenuToggle.setAttribute('aria-expanded', 'false');
              subMenuToggle.nextElementSibling.style.display = 'none';
            })
          });

        })
      }

      subMenuToggles.forEach(handleSubMenuToggle);
    },
  };
})(Drupal);
