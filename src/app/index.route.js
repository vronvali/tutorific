(function() {
    'use strict';

    angular
        .module('tutorific')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/components/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
