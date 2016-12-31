(function () {
  'use strict';

  var module = angular.module('LunchCheck', []);

  module.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope)
  {
    $scope.resultMessage = "" ;
    $scope.menu          = "" ;
    $scope.customStyle = {};

    $scope.checkListOfItems = function()
    {
      if($scope.menu == "")
      {
        $scope.resultMessage = "Please enter data first" ;
          $scope.customStyle.styleAnswer  = {"color":"red"};
          $scope.customStyle.styleTextBox = {"border-color":"red"};
      }
      else if(lunchCheck($scope.menu))
      {
        $scope.resultMessage = "Enjoy!" ;
          $scope.customStyle.styleAnswer = {"color":"green"};
          $scope.customStyle.styleTextBox = {"border-color":"green"};
      }
      else
      {
        $scope.resultMessage = "Too much!" ;
        $scope.customStyle.styleAnswer = {"color":"orange"};
        $scope.customStyle.styleTextBox = {"border-color":"orange"};
      }
    };

    $scope.chekEmptyList = function()
    {
      if($scope.menu == "")
      {
        $scope.resultMessage = "" ;
        $scope.customStyle.styleTextBox = {"border-color":"black"};
      }
    };
  }

  function lunchCheck(itemString)
  {
    var array = itemString.split(',');

    var count = array.length ;

    for (var i in array)
    {
      if (array[i] == "")
      count = count - 1 ;
    }

    if(count <=3)
    {
      return true ;
    }
    else
    {
      return false ;
    }
  }

})();
