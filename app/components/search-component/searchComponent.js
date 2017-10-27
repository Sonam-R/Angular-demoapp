(function () {
    angular
        .module('starwars')
        .component('searchComponent', searchComponent());

    function searchComponent() {
        let CDO = {
            templateUrl: './app/components/search-component/searchComponent.html',
            controllerAs: 'model',
            controller: SearchComponentController,
            bindings: {
                count: '<',
                onSearch: '&',
                searchQuery: '='
            }
        };

        function SearchComponentController($scope, $timeout) {
            let vm = $scope.model;

            vm.$onChanges = function (obj) {
                if (obj.counts.currentValue) {
                    vm.count = obj.count.currentValue;
                }
            };
            // $scope.$watch('searchQuery', vm.onSearch);

            vm.$onDestroy = function () {
                vm = null;
            };
        }

        SearchComponentController.$inject = ['$scope', '$timeout'];

        return CDO;
    }

})();
