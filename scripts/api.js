'use strict';

const api = (function () {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy-dameon';
  
  let getItems = function(name, callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    callback();
  };

  return {
    getItems,
  };

}());