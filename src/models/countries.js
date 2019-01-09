const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:selected-country', (event) => {
    const index = event.detail;
    const foundCountry = this.findCountry(index)
    PubSub.publish('Countries:found-country', foundCountry)
  })
}

Countries.prototype.findCountry = function(index){
  return this.countries[index];
}

Countries.prototype.getData = function(){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    };

    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    this.countries = data;
    PubSub.publish('Countries:all-data', this.countries)
  })

  xhr.open('GET', 'https://restcountries.eu/rest/v2/');
  xhr.setRequestHeader('Accept', 'application.json');
  xhr.send();
}

module.exports = Countries;
