const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){
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

Countries.prototype.getData = function(){

}

module.exports = Countries;
