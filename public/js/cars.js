"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
let page = 2

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  let results = ['<div class="row">']
  carsJSON.forEach(car => {
    results.push(`<div class='col-md-4 car'><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`)
  })
  results.push("</div>")
  return results.join(" ")
}


function addCarsToDOM(carsJSON) {
  let formattedCars = formatCars(carsJSON)
  $('#cars').append(formattedCars)
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  page += 1
  let url = baseUrl + page + '/3'
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: (data) => {
      addCarsToDOM(data)
    }
  })
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
