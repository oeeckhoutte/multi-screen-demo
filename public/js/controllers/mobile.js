'use strict';

/* Mobile controllers */

angular.module('multi-screen-demo.controllers.mobile', [
  'ngTouch'
]).
// controller for mobile code
controller('MobileCodeCtrl', function($scope, $location, socket) {
  $scope.submitCode = function() {
    socket.emit('pair:getCode', { code: $scope.code });
  };

  socket.on('pair:connected', function() {
    $location.path('/main');
  });

  $scope.isCodeInvalid = false;
  socket.on('pair:fail', function() {
    $scope.isCodeInvalid = true;
  });
}).

// controller for mobile navbar
controller('MobileNavbarCtrl', function($scope, $location, socket) {
  $scope.selectMain = function() {
    socket.emit('main:init', {});
    $location.path('/main');
  };
}).

// controller for mobile demo list
controller('MobileDemoListCtrl', function($scope, $location, socket) {
  $scope.selectdpad = function() {
    socket.emit('dpad:init', {});
    $location.path('/dpad');
  };
  $scope.selectTrackpad = function() {
    socket.emit('trackpad:init', {});
    $location.path('/trackpad');
  };
}).

// controller for mobile D-pad demo
controller('MobileDpadCtrl', function($scope, socket) {
  $scope.selectUp = function() {
    socket.emit('dpad:selectUp', {});
  };
  $scope.selectLeft = function() {
    socket.emit('dpad:selectLeft', {});
  };
  $scope.selectRight = function() {
    socket.emit('dpad:selectRight', {});
  };
  $scope.selectDown = function() {
    socket.emit('dpad:selectDown', {});
  };
});