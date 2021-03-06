const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryDetailView = require('./views/country_detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const countryDetailView = new CountryDetailView();
  countryDetailView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();
});
