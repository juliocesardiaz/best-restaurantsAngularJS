bestRestaurant.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push(
      {name: $scope.restaurantName, type: $scope.restaurantType, location: $scope.restaurantLocation, priceRange: $scope.restaurantPriceRange });
      // {type: $scope.restaurantType }
      // {location: $scope.restaurantLocation }
      // {priceRange: $scope.restaurantPriceRange }
    // );
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantLocation = null;
    $scope.restaurantPriceRange = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
