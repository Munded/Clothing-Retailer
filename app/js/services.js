shopTillYouDrop.factory('Inventory', function($http){
  return {
    getItems: function() {
      return $http.get('../inventory/inventory.json');
      }
    };
  });