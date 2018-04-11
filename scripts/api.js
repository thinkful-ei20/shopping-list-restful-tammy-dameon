'use strict';

const api = (function () {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy-dameon';
  
  let getItems = function(callback) {
    callback('api module works!');
  };

  return {
    getItems,
    BASE_URL,
  };
}());