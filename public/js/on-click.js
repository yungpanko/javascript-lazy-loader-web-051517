"use strict";

$(document).ready(function () {
  // add click listener here
  // it should call on fetchJSON()
  getMoreCars()
});

function getMoreCars() {
  $('#load-cars').on('click', function (event) {
    fetchJSON()
    event.preventDefault()
  })
}
