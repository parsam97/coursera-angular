(function() {
'use strict';

angular.module('lunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController ($scope) {
  $scope.list = '';
  $scope.colorResult = 'black'
  $scope.boxBorder = ''

  $scope.calculate = function() {
    var splitUp = $scope.list.split(',');
    var final = new Array;
    for (var i = 0; i < splitUp.length; i++) {
      var trimmed = splitUp[i].trim();
      if (trimmed == "") {} else {
        final.push(splitUp[i].trim());
      }
    };
    if (final.length == 0) {
      $scope.answer = "Please enter data first"
      $scope.colorResult = 'red'
      $scope.boxBorder = '1px solid red'
    } else if (final.length <= 3) {
      $scope.answer = "Enjoy!"
      $scope.colorResult = 'green'
      $scope.boxBorder = '1px solid green'
    } else {
      $scope.answer = "Too much!"
      $scope.colorResult = 'green'
      $scope.boxBorder = '1px solid green'
    }
  }
}

})();
