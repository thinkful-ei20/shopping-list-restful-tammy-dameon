'use strict';
/* global Item, store, api */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  let findAndUpdate = function(id,newData){
    let itemToChange = this.items.find(item => item.id === id);
    Object.assign(itemToChange, newData);

  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const setError = function (errorThrown) {
    this.error = $('.error-message').text(errorThrown);
    return this.error = null;
  };

  
  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error: null,

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setError,
  };
  
}());
