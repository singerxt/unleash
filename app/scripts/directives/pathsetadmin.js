'use strict';

/**
 * @ngdoc directive
 * @name unleashApp.directive:unleashIconModal
 * @description
 * # unleash icon modal
 */

angular.module('unleashApp')
  .directive('unleashSetAdmin', function(userService) {
    return {
      template: '<a href="#" ng-click="giveAdminAccess(currentPathOwner)">Admin toggle</a>',
      replace: false,
      link: function templateSetAdmin(scope) {
        scope.giveAdminAccess = userService.setUserAdmin;
      }
    };
  });
