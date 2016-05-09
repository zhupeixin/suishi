// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    //一个页面为一个状态，在下面配置其路径，控制器等，添加了首页和第一个跳转页的示例
    $stateProvider
          .state('start', {
            url: '/start',
            templateUrl: 'templates/start.html',
            controller: "startCtrl"
          })
        .state('first',{
            url: '/first',
            templateUrl: 'templates/first.html',
            controller: "firstCtrl"
        })
        .state('second_1', {
            url: '/second_1',
            templateUrl: 'templates/second_1.html',
            controller: "second_1Ctrl"
        })
        .state('second_2', {
            url: '/second_2',
            templateUrl: 'templates/second_2.html',
            controller: "second_2Ctrl"
        })
        .state('second_3', {
            url: '/second_3',
            templateUrl: 'templates/second_3.html',
            controller: "second_3Ctrl"
        })
        .state('second_4', {
            url: '/second_4',
            templateUrl: 'templates/second_4.html',
            controller: "second_4Ctrl"
        })
        .state('three_1_1', {
            url: '/three_1_1',
            templateUrl: 'templates/three_1_1.html',
            controller: "three_1_1Ctrl"
        })
        .state('three_1_2', {
            url: '/three_1_2',
            templateUrl: 'templates/three_1_2.html',
            controller: "three_1_2Ctrl"
        })
        .state('three_1_3', {
            url: '/three_1_3',
            templateUrl: 'templates/three_1_3.html',
            controller: "three_1_3Ctrl"
        })
        .state('three_1_4', {
            url: '/three_1_4',
            templateUrl: 'templates/three_1_4.html',
            controller: "three_1_4Ctrl"
        })
        .state('three_1_5', {
            url: '/three_1_5',
            templateUrl: 'templates/three_1_5.html',
            controller: "three_1_5Ctrl"
        })
        .state('three_1_6', {
            url: '/three_1_6',
            templateUrl: 'templates/three_1_6.html',
            controller: "three_1_6Ctrl"
        })
        .state('three_2_1', {
            url: '/three_2_1',
            templateUrl: 'templates/three_2_1.html',
            controller: "three_2_1Ctrl"
        })
        .state('three_2_2', {
            url: '/three_2_2',
            templateUrl: 'templates/three_2_2.html',
            controller: "three_2_2Ctrl"
        })
        .state('three_2_3', {
            url: '/three_2_3',
            templateUrl: 'templates/three_2_3.html',
            controller: "three_2_3Ctrl"
        })
        .state('three_2_4', {
            url: '/three_2_4',
            templateUrl: 'templates/three_2_4.html',
            controller: "three_2_4Ctrl"
        })
        .state('three_2_5', {
            url: '/three_2_5',
            templateUrl: 'templates/three_2_5.html',
            controller: "three_2_5Ctrl"
        })
        .state('three_2_6', {
            url: '/three_2_6',
            templateUrl: 'templates/three_2_6.html',
            controller: "three_2_6Ctrl"
        })
        .state('three_3_1', {
            url: '/three_3_1',
            templateUrl: 'templates/three_3_1.html',
            controller: "three_3_1Ctrl"
        })
        .state('three_3_2', {
            url: '/three_3_2',
            templateUrl: 'templates/three_3_2.html',
            controller: "three_3_2Ctrl"
        })
        .state('three_3_3', {
            url: '/three_3_3',
            templateUrl: 'templates/three_3_3.html',
            controller: "three_3_3Ctrl"
        })
        .state('three_3_4', {
            url: '/three_3_4',
            templateUrl: 'templates/three_3_4.html',
            controller: "three_3_4Ctrl"
        })
        .state('three_3_5', {
            url: '/three_3_5',
            templateUrl: 'templates/three_3_5.html',
            controller: "three_3_5Ctrl"
        })
        .state('three_3_6', {
            url: '/three_3_6',
            templateUrl: 'templates/three_3_6.html',
            controller: "three_3_6Ctrl"
        })
        .state('three_4_1', {
            url: '/three_4_1',
            templateUrl: 'templates/three_4_1.html',
            controller: "three_4_1Ctrl"
        })
        .state('three_4_2', {
            url: '/three_4_2',
            templateUrl: 'templates/three_4_2.html',
            controller: "three_4_2Ctrl"
        })
        .state('three_4_3', {
            url: '/three_4_3',
            templateUrl: 'templates/three_4_3.html',
            controller: "three_4_3Ctrl"
        })
        .state('three_4_4', {
            url: '/three_4_4',
            templateUrl: 'templates/three_4_4.html',
            controller: "three_4_4Ctrl"
        })
        .state('three_4_5', {
            url: '/three_4_5',
            templateUrl: 'templates/three_4_5.html',
            controller: "three_4_5Ctrl"
        })
        .state('three_4_6', {
            url: '/three_4_6',
            templateUrl: 'templates/three_4_6.html',
            controller: "three_4_6Ctrl"
        })
        .state('banquan',{
            url: '/banquan',
            templateUrl: 'templates/banquan.html',
            controller: "banquanCtrl"
        });

    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
