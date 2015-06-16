shopTillYouDrop.factory('Inventory', function($http){
  return {
    getItems: function() {
      return $http.get('app/inventory/inventory.json');
      }
    };
  });