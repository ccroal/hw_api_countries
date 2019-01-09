const PubSub = require('../helpers/pub_sub.js');

const CountryDetailView = function(){

};

CountryDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:found-country', (event) => {
    this.render(event.detail);
    console.log('Detail:', event.detail);
  })
};

CountryDetailView.prototype.render = function(country){
  const displayCountry = document.querySelector('#country');
  country.innerHTML = '';

  const countryName = document.createElement('h2');
  countryName.textContent = country.name;

  const countryRegion = document.createElement('p');
  countryRegion.textContent = `Region: ${country.region}`

  const countryFlag = this.createImage(country);

  displayCountry.appendChild(countryName);
  displayCountry.appendChild(countryRegion);
  displayCountry.appendChild(countryFlag);
}

CountryDetailView.prototype.createImage = function(country){
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = country.flag
  return img;
}

module.exports = CountryDetailView;
