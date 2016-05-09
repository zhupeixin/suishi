angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    showMsgService.showMsg("首页控制器是startCtrl");
    $scope.goFirst = function() {
      $state.go('first');
    }
  })
  .controller('firstCtrl',function($scope ,$state) {
    $scope.goBackStart = function() {
      $state.go('start');
    };
        $scope.goSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goSecond_2 = function() {
            $state.go('second_2');
        };
        $scope.goSecond_3 = function() {
            $state.go('second_3');
        };
        $scope.goSecond_4 = function() {
            $state.go('second_4');
        };
        $scope.goBanQuan = function() {
            $state.go('banquan');
        }
  })
    .controller('second_1Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        }
    })
    .controller('second_2Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        }
    })
    .controller('second_3Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        }
    })
    .controller('second_4Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        }
    });

