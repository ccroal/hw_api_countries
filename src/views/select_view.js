const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:all-data', (event) => {
    this.populate(event.details);
  })
}

module.exports = SelectView;
