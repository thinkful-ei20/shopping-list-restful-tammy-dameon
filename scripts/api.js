'use strict';

const api = (function () {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/tammy-dameon';
  
  let getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = (name, callback) => {
    const newItem = JSON.stringify({
      name
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };
  return {
    getItems,
    createItem,
  };

})();