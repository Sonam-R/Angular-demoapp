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

        function SearchComponentController($scope) {
            let vm = $scope.model;

            vm.$onChanges = function (obj) {
                if (obj.counts.currentValue) {
                    vm.count = obj.count.currentValue;
                }
            };

            vm.$onDestroy = function () {
                vm = null;
            };
        }

        SearchComponentController.$inject = ['$scope'];

        return CDO;
    }

})();
