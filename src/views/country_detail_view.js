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
  displayCountry.innerHTML = '';

  const countryName = document.createElement('h2');
  countryName.textContent = country.name;

  const countryRegion = document.createElement('p');
  countryRegion.textContent = `Region: ${country.region}`

  const countryFlag = this.createImage(country);

  const countryLanguages = this.createList(country);

  displayCountry.appendChild(countryName);
  displayCountry.appendChild(countryRegion);
  displayCountry.appendChild(countryFlag);
  displayCountry.appendChild(countryLanguages);
}

CountryDetailView.prototype.createImage = function(country){
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = country.flag
  return img;
}

CountryDetailView.prototype.createList = function(country){
  const list = document.createElement('ul');
  country.languages.forEach((language) => {
  const listItem = document.createElement('li');
  listItem.textContent = language.name
  list.appendChild(listItem)
});
return list;
}

module.exports = CountryDetailView;
