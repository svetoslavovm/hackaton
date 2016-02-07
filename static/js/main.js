'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
  var donateButton = document.getElementsByClassName('go-to-donate')[0];

  donateButton.addEventListener('click', function () {
    document.location.href = '/donate.html';
  });

  if (document.location.pathname === '/check-your-rights.html') {
    setupFlowLogic();
  }

});

function setupFlowLogic() {
  var $container = $('.flow-container');
  var flow = {
    model: {
      data: slides,
      $legalExample: $('.legal-example'),
    },
    brain: {},
    view: {},
  };

  flow.model.getSlide = function (i) {
    //console.log(i, flow.model.data[i]);
    //console.log(i, flow.model.data[i].previousButton);
    return flow.model.data[i];
  };

  flow.view.updateContainer = function (data) {
    $container.html(data.content);
    var $buttonsDiv = $('<div class="buttons"></div>');
    $container.append($buttonsDiv);
    flow.view.addNextButton(data);
    flow.view.addPreviousButton(data);
  };

  flow.view.addNextButton = function (data) {
    if (data.nextButton === false) {
      return false;
    }

    var $button = $('<button class="green next"></button>');
    $button
      .attr('data-next', data.yesIndex)
      .text(data.nextButton)
      .on('click', function () {
        flow.brain.loadSlide(data.yesIndex);
        console.log(data.yesIndex);
      });

    $container.find('.buttons').append($button);
  };

  flow.view.addPreviousButton = function (data) {
    if (data.previousButton === false) {
      return false;
    }

    var $button = $('<button class="green next"></button>');
    $button
      .attr('data-prev', data.noIndex)
      .text(data.previousButton)
      .on('click', function () {
        flow.brain.loadSlide(data.noIndex);
        console.log(data.noIndex);
      });

    $container.find('.buttons').append($button);
  };

  flow.view.toggleExampleIcon = function () {
    $('.example-button').on('click', function () {
      $(this).toggleClass('displayed');

      if ($(this).hasClass('displayed')) {
        console.log('showing');
        flow.view.showExample();
      } else {
        console.log('hiding');
        flow.view.hideExample();
      }
    });
  };

  flow.view.showExample = function () {
    console.log('ex: ', flow.model.$legalExample);
    $container.append(flow.model.$legalExample);
  };

  flow.view.hideExample = function () {
    $container.find('.legal-example').remove();
  };

  flow.brain.init = function () {
    flow.brain.loadSlide(0);
    flow.view.toggleExampleIcon();
  };

  flow.brain.loadSlide = function (i) {
    var slideData = flow.model.getSlide(i);
    flow.view.updateContainer(slideData);
  };

  flow.brain.init();

  return flow;
}

var slides = {
  0: {
    index: 0,
    yesIndex: 1,
    noIndex: 0,
    backIndex: 0,
    content: 'This questionnaire help determine who owns work produced at a hackaton based upon any leagal documents, licenses, and other factors.',
    nextButton: 'Start',
    previousButton: false,
  },
  1: {
    index: 1,
    yesIndex: 2,
    noIndex: 2,
    backIndex: 1,
    content: 'At the time of participation, were you under any other employment IP contracts?',
    nextButton: 'Yes',
    previousButton: 'No',
  },
  2: {
    index: 2,
    yesIndex: 3,
    noIndex: 2,
    backIndex: 2,
    content: 'Look at you, already off to a good start! Head on over to the main chart- you\'re ready.',
    nextButton: 'Yes',
    previousButton: 'No',
  },
  3: {
    index: 3,
    yesIndex: 3,
    noIndex: 2,
    backIndex: 2,
    content: 'This is the thid slide',
    nextButton: 'Yes',
    previousButton: 'No',
  },
  4: {
    index: 4,
    yesIndex: 0,
    noIndex: 0,
    backIndex: 0,
    content: 'This is the first slide',
  },
  5: {
    index: 5,
    yesIndex: 0,
    noIndex: 0,
    backIndex: 0,
    content: 'This is the first slide',
  },
  6: {
    index: 0,
    yesIndex: 0,
    noIndex: 0,
    backIndex: 0,
    content: 'This is the first slide',
  },
  7: {
    index: 0,
    yesIndex: 0,
    noIndex: 0,
    backIndex: 0,
    content: 'This is the first slide',
  },
};
