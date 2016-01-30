'use strict';

document.addEventListener('DOMContentLoaded', function(event) {
  var donateButton = document.getElementsByClassName('go-to-donate')[0];

  donateButton.addEventListener('click', function() {
    document.location.href = '/donate.html';
  });
});
