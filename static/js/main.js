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
    return flow.model.data[i];
  };

  flow.view.updateContainer = function (data) {
    $container.html(data.content);
    var $buttonsDiv = $('<div class="buttons"></div>');
    $container.append($buttonsDiv);
    flow.view.addYesButton(data);
    flow.view.addNoButton(data);
  };

  flow.view.addNoButton = function (data) {
    if (data.noButton === false) {
      return false;
    }

    var $button = $('<button class="green next"></button>');
    $button
      .attr('data-next', data.noIndex)
      .text(data.noButton)
      .on('click', function () {
        flow.brain.loadSlide(data.noIndex);
        console.log(data.noIndex);
      });

    $container.find('.buttons').append($button);
  };

  flow.view.addYesButton = function (data) {
    if (data.yesButton === false) {
      return false;
    }

    var $button = $('<button class="green next"></button>');
    $button
      .attr('data-prev', data.yesIndex)
      .text(data.yesButton)
      .on('click', function () {
        flow.brain.loadSlide(data.yesIndex);
        console.log(data.yesIndex);
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
    noIndex: 0,
    yesIndex: 1,
    backIndex: 0,
    content: 'This questionnaire help determine who owns work produced at a hackaton based upon any leagal documents, licenses, and other factors.',
    noButton: false,
    yesButton: 'Start',
    background: false,
  },
  1: {
    index: 1,
    noIndex: 3,
    yesIndex: 4,
    backIndex: 0,
    content: 'At the time of participation, were you under any other employment IP contracts?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  2: {
    index: 2,
    noIndex: 2,
    yesIndex: 8,
    backIndex: 1,
    content: 'Look at you, already off to a good start! Head on over to the main chart- you\'re ready.',
    noButton: false,
    yesButton: 'Next',
    background: 'green',
  },
  3: {
    index: 3,
    noIndex: 5,
    yesIndex: 4,
    backIndex: 1,
    content: 'Did you have your employer sign a waiver?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  4: {
    index: 4,
    noIndex: 4,
    yesIndex: 5,
    backIndex: 3,
    content: 'Careful - these are not always legally binding.',
    noButton: false,
    yesButton: 'Next',
    background: false,
  },
  5: {
    index: 5,
    noIndex: 7,
    yesIndex: 6,
    backIndex: 3,
    content: 'Did you sign any hackathon paperwork that claims conflictinng ownership?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  6: {
    index: 6,
    yesIndex: 6,
    noIndex: 6,
    backIndex: 5,
    content: 'Prior IP contracts win out, but your host won\'t be happy. Lawyer up. This might get messy.',
    noButton: false,
    yesButton: false,
    background: 'yellow',
  },
  7: {
    index: 7,
    yesIndex: 7,
    noIndex: 7,
    backIndex: 5,
    content: 'You don\'t own this. Your employer does.',
    noButton: false,
    yesButton: false,
    background: 'orange',
  },
  8: {
    index: 8,
    noIndex: 9,
    yesIndex: 8,
    backIndex: 2,
    content: 'Did you build it from scratch?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  9: {
    index: 9,
    noIndex: 11,
    yesIndex: 15,
    backIndex: 8,
    content: 'Built on something you had legal access to?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  10: {
    index: 10,
    noIndex: 10,
    yesIndex: 22,
    backIndex: 8,
    content: 'Did you sign any paperwork?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  11: {
    index: 11,
    noIndex: 14,
    yesIndex: 12,
    backIndex: 9,
    content: 'Uh oh. Did you sing an idemnification clause?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  12: {
    index: 12,
    noIndex: 12,
    yesIndex: 13,
    backIndex: 11,
    content: 'You\'re in trouble*, AND',
    noButton: false,
    yesButton: 'Next',
    background: false,
  },
  13: {
    index: 13,
    noIndex: 13,
    yesIndex: 13,
    backIndex: false,
    content: 'You do not own this.',
    noButton: false,
    yesButton: false,
    background: 'red',
  },
  14: {
    index: 14,
    noIndex: 14,
    yesIndex: 13,
    backIndex: 11,
    content: 'You AND the Hackathon host are in trouble**, AND',
    noButton: false,
    yesButton: 'Next',
    background: false,
  },
  15: {
    index: 15,
    noIndex: 16,
    yesIndex: 15,
    backIndex: 9,
    content: 'Built on Open source?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  16: {
    index: 16,
    noIndex: 16,
    yesIndex: 17,
    backIndex: 15,
    content: 'By Jove, You might actually own this!',
    noButton: false,
    yesButton: 'Next',
    background: 'light green',
  },
  17: {
    index: 17,
    noIndex: 18,
    yesIndex: 19,
    backIndex: 16,
    content: 'Did you work on a team?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  18: {
    index: 18,
    noIndex: 18,
    yesIndex: 18,
    backIndex: 17,
    content: 'CONGRATS! You own this!',
    noButton: false,
    yesButton: false,
    background: 'dark green',
  },
  19: {
    index: 19,
    noIndex: 19,
    yesIndex: 19,
    backIndex: 17,
    content: 'You own (1/# of team members) % of this!***',
    noButton: false,
    yesButton: false,
    background: 'light green',
  },
  20: {
    index: 20,
    noIndex: 16,
    yesIndex: 21,
    backIndex: 15,
    content: '"copyleft" open-source?',
    noButton: 'No',
    yesButton: 'Yes',
    background: false,
  },
  21: {
    index: 21,
    noIndex: 21,
    yesIndex: 13,
    backIndex: 20,
    content: 'You have the moral profilt of creating a product for the greater good, but -',
    noButton: false,
    yesButton: 'Next',
    background: false,
  },
  22: {
    index: 22,
    noIndex: 24,
    yesIndex: 23,
    backIndex: 10,
    content: 'Did you read the fine print?',
    noButton: 'No',
    yesButton: 'Next',
    background: false,
  },
  23: {
    index: 23,
    noIndex: 23,
    yesIndex: 24,
    backIndex: 22,
    content: 'Liar.',
    noButton: false,
    yesButton: 'Next',
    background: false,
  },
  24: {
    index: 24,
    noIndex: 24,
    yesIndex: 24,
    backIndex: 22,
    content: 'Dig it out now - read it carefully. Among the jargon, do you see...',
    noButton: false,
    yesButton: false,
    background: false,
  },
};
