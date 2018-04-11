'use strict';
/* global shoppingList, store api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

// store.items.push(Item.create('apples'));
// $.getJSON('https://thinkful-list-api.herokuapp.com/tammy-dameon/items', (response) => {
//   console.log('api response:', response);
// });


// api.getItems(function(data) {
//   console.log(data);
// });

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});

console.log('hi');




