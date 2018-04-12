'use strict';
/* global shoppingList, store, api, Item */
const api = (function () {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy-dameon';
  

  //removed name from function
  let getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    
  };

  let createItem = function(name, success, error){
    let newItem = JSON.stringify({'name': name});

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: success,
      error: error,
    }); 
  };

  let updateItem = function (id, updateData, success, error) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: success,
      error: error,
    });
  };
  let deleteItem = function(id, success, error){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: success,
      error: error,
    });
  };
  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();