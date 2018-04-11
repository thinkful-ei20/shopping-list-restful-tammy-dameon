'use strict';
/* global shoppingList, store api Item */
const api = (function () {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy-dameon';
  
  //removed name from function
  let getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    
  };

  let createItem = function(name,callback){
    let newItem = JSON.stringify({'name': name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
    }); 
  };
  
  return {
    getItems,
    createItem
  };

}());