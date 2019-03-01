(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', function ($scope) {
  $scope.lunchData = "";        // Input
  $scope.lunchMessage = "";     // Output
  $scope.customStyle = "";      // Output

  $scope.checkTooMuch = function () {
    let lunchItemsCnt = 0;  // Count of lunch items

    // Split comma separated input into a list of items.
    let lunchItems = $scope.lunchData.split(',');

    // lunchItems contains a list of lunch items
    // trim spaces from each item and count items
    // that are longer than zero (have data).
    for (let i=0; i<lunchItems.length; i++) {
        if (lunchItems[i].trim().length)
            lunchItemsCnt++;
    }

    // Return message based on number of items entered.
    // Pass back a color based on items count.
    // ** The view can decide how to use the color. **
    switch (lunchItemsCnt) {
      case 0:   // No lunch items entered
          $scope.customStyle = "red";
          return $scope.lunchMessage = 'Please enter data first';

      case 1:   // 1-3 lunch items entered
      case 2:
      case 3:
        $scope.customStyle = "green";
        return $scope.lunchMessage = 'Enjoy!';

      default:  // More than 3 lunch items entered
        $scope.customStyle = "red";
        return $scope.lunchMessage = 'Too much!';
    }
  };

});

})();
