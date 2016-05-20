(function() {
    var app = angular.module('store-directives-home', []);

    app.directive("sidebarHome", function() {
        return {
            restrict: "E",
            templateUrl: "/directives/home/sidebar-home.html",
            controller: function($scope) {

            },
            controllerAs: "sidebarHome"
        };
    });

    app.directive("headerHome", function() {
        return {
            restrict: "E",
            templateUrl: "/directives/home/header-home.html",
            controller: function($scope) {

            },
            controllerAs: "headerHome"
        };
    });
    app.directive("controlHome", function() {
        return {
            restrict: "E",
            templateUrl: "/directives/home/control-home.html",
            controller: function($scope) {

            },
            controllerAs: "controlHome"
        };
    });
        app.directive("footerHome", function() {
        return {
            restrict: "E",
            templateUrl: "/directives/home/footer-home.html",
            controller: function($scope) {

            },
            controllerAs: "footerHome"
        };
    });

})();