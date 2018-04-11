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

  let updateItem = function (id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    });
  };
  let deleteItem = function(id,callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
     
      success: callback,
    });
  };
  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();