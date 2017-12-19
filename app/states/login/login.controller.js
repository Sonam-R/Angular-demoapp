(function () {
    angular.module("starwars").controller('LoginController', ['ApiService', 'UserService', '$state', '$timeout', function(ApiService, UserService, $state, $timeout){
        var vm = this;
        vm.loading = false;

        vm.login = function(){
            vm.loading = true;
            $timeout( function(){
                ApiService.login({search : vm.username},function(r){
                    for(let i = 0; i< r.results.length; i++ ){
                        if(r.results[i].name === vm.username && r.results[i].birth_year === vm.password){
                            UserService.setUser(r.results[i]);
                            $state.go('home.main');
                        }
                    }
                }, function(err){
                    console.log(err);
                });
            }, 2000 );
        }

    }]);
})();