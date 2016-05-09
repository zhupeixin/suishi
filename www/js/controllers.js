angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    //showMsgService.showMsg("首页控制器是startCtrl");
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
        };
        $scope.goThree_1_1 = function() {
            $state.go('three_1_1');
        };
        $scope.goThree_1_2 = function() {
            $state.go('three_1_2');
        };
        $scope.goThree_1_3 = function() {
            $state.go('three_1_3');
        };
        $scope.goThree_1_4 = function() {
            $state.go('three_1_4');
        };
        $scope.goThree_1_5 = function() {
            $state.go('three_1_5');
        };
        $scope.goThree_1_6 = function() {
            $state.go('three_1_6');
        };
    })
    .controller('second_2Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        };
        $scope.goThree_2_1 = function() {
            $state.go('three_2_1');
        };
        $scope.goThree_2_2 = function() {
            $state.go('three_2_2');
        };
        $scope.goThree_2_3 = function() {
            $state.go('three_2_3');
        };
        $scope.goThree_2_4 = function() {
            $state.go('three_2_4');
        };
        $scope.goThree_2_5 = function() {
            $state.go('three_2_5');
        };
        $scope.goThree_2_6 = function() {
            $state.go('three_2_6');
        };
    })
    .controller('second_3Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        };
        $scope.goThree_3_1 = function() {
            $state.go('three_3_1');
        };
        $scope.goThree_3_2 = function() {
            $state.go('three_3_2');
        };
        $scope.goThree_3_3 = function() {
            $state.go('three_3_3');
        };
        $scope.goThree_3_4 = function() {
            $state.go('three_3_4');
        };
        $scope.goThree_3_5 = function() {
            $state.go('three_3_5');
        };
        $scope.goThree_3_6 = function() {
            $state.go('three_3_6');
        };
    })
    .controller('second_4Ctrl',function($scope ,$state) {
        $scope.goBanQuan = function() {
            $state.go('banquan');
        };
        $scope.goThree_4_1 = function() {
            $state.go('three_4_1');
        };
        $scope.goThree_4_2 = function() {
            $state.go('three_4_2');
        };
        $scope.goThree_4_3 = function() {
            $state.go('three_4_3');
        };
        $scope.goThree_4_4 = function() {
            $state.go('three_4_4');
        };
        $scope.goThree_4_5 = function() {
            $state.go('three_4_5');
        };
        $scope.goThree_4_6 = function() {
            $state.go('three_4_6');
        };
    })
    .controller('three_1_1Ctrl',function($scope ,$state) {})
    .controller('three_1_2Ctrl',function($scope ,$state) {})
    .controller('three_1_3Ctrl',function($scope ,$state) {})
    .controller('three_1_4Ctrl',function($scope ,$state) {})
    .controller('three_1_5Ctrl',function($scope ,$state) {})
    .controller('three_1_6Ctrl',function($scope ,$state) {})
    .controller('three_2_1Ctrl',function($scope ,$state) {})
    .controller('three_2_2Ctrl',function($scope ,$state) {})
    .controller('three_2_3Ctrl',function($scope ,$state) {})
    .controller('three_2_4Ctrl',function($scope ,$state) {})
    .controller('three_2_5Ctrl',function($scope ,$state) {})
    .controller('three_2_6Ctrl',function($scope ,$state) {})
    .controller('three_3_1Ctrl',function($scope ,$state) {})
    .controller('three_3_2Ctrl',function($scope ,$state) {})
    .controller('three_3_3Ctrl',function($scope ,$state) {})
    .controller('three_3_4Ctrl',function($scope ,$state) {})
    .controller('three_3_5Ctrl',function($scope ,$state) {})
    .controller('three_3_6Ctrl',function($scope ,$state) {})
    .controller('three_4_1Ctrl',function($scope ,$state) {})
    .controller('three_4_2Ctrl',function($scope ,$state) {})
    .controller('three_4_3Ctrl',function($scope ,$state) {})
    .controller('three_4_4Ctrl',function($scope ,$state) {})
    .controller('three_4_5Ctrl',function($scope ,$state) {})
    .controller('three_4_6Ctrl',function($scope ,$state) {})
    .controller('banquanCtrl',function($scope ,$state) {

    });


