(function equalHeightsBlocksScript(Drupal) {
  Drupal.behaviors.equalHeightsBlocks = {
    attach: function (context) {
      context = context || document;
     
      const layouts = Array.from(context.querySelectorAll('.layout'));
      const layoutsWithIaBlocks = layouts.filter(item => item.querySelector('.ia-block'));
      const layoutsWithBoxLinks = layouts.filter(item => item.querySelector('.box-links-listing__list-item'));
      const layoutsWithLinkBlocks = layouts.filter(item => item.querySelector('.link-block'));
      const layoutsWithNewsListBlocks = layouts.filter(item => item.querySelector('.news-list'));
      const layoutsWithTextBlocks = layouts.filter(item => item.querySelector('.paragraph--type--localgov-text'));

      function equaliseHeightsOfTheseBlocks(layoutWithBlocks, typeOfBlock) {
        layoutWithBlocks.forEach(item => {
          const blocksToEqualiseHeights = item.querySelectorAll(typeOfBlock);
          const blockHeights = [];

          function handleGetHeights() {
            blocksToEqualiseHeights.forEach(block => {
              blockHeights.push(block.offsetHeight);
            });
            let tallestBlock = Math.max(...blockHeights);
            blocksToEqualiseHeights.forEach(block => {
              block.style.height = `${tallestBlock}px`;
            });
          }

          handleGetHeights();
        })
      }

      layoutsWithNewsListBlocks.forEach(layout => {
        equaliseHeightsOfTheseBlocks(layoutsWithNewsListBlocks, '.news-list');
      });

      layoutsWithIaBlocks.forEach(layout => {
        equaliseHeightsOfTheseBlocks(layoutsWithIaBlocks, '.ia-block');
      });

      layoutsWithBoxLinks.forEach(layout => {
        equaliseHeightsOfTheseBlocks(layoutsWithBoxLinks, '.box-links-listing__list-item');
      });
      
      layoutsWithLinkBlocks.forEach(layout => {
        equaliseHeightsOfTheseBlocks(layoutsWithLinkBlocks, '.link-block');
      });
      
      layoutsWithTextBlocks.forEach(layout => {
        equaliseHeightsOfTheseBlocks(layoutsWithTextBlocks, '.paragraph--type--localgov-text');
      });
      
    }
  };
}(Drupal));
