function getDataFromServer(callback) {​​​​​​
    $.ajax({​​​​​​
      url: 'https://example.com/api/data',
      method: 'GET',
      success: function(data) {​​​​​​
        callback(data);
      }​​​​​​,
      error: function(error) {​​​​​​
        callback(null, error);
      }​​​​​​
    }​​​​​​);
  }​​​​​​
  module.exports={​​​​​​
    getDataFromServer: getDataFromServer
  }​​​​​​