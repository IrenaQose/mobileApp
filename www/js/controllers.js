angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// playlistController

.controller('PlaylistsCtrl', function($scope) {
  $scope.groups = [{
      title: "Playlist numero uno",
      contents: [
        {
          line: "DONT BE AFRAID"
        },
        {
    	    line: "WHY, WHAT & WHO"
        },
        {
    			line: "PITCH OR PRESENT"
        },
        {
    			line: "GREAT PRESENTATIONS"
        }
      ]
    },
    {
      title: "Playlist numero due",
      contents: [
        {
          line: "WHY?"
        },
        {
    	    line: "WHAT IS THE MESSAGE?"
        },
        {
    			line: "WHAT IS THE VEHICLE?"
        },
        {
    			line: "WHO ARE THE AUDIENCE?"
        }
      ]
    },
      {
      title: "Itinerario interno",
      contents: [
        {
          line: "BLAH"
        },
        {
    	    line: "BLAH"
        }
      ]
    },
    {
    title: "Tour completo",
    contents: [
      {
        line: "BLAH"
      },
      {
        line: "BLAH"
      }
    ]
  },
  {
  title: "Itinerario esterno",
  contents: [
    {
      line: "BLAH"
    },
    {
      line: "BLAH"
    }
  ]
}
  ];
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});
