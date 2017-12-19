(function () {
    angular.module("starwars").controller('LoginController', ['ApiService', 'UserService', '$state', '$timeout', function(ApiService, UserService, $state, $timeout){
        var vm = this;
        vm.loading = false;

        vm.login = function(){
                ApiService.login({search : vm.username},function(r){
                    for(let i = 0; i< r.results.length; i++ ){
                        if(r.results[i].name === vm.username && r.results[i].birth_year === vm.password){
                            vm.loading = true;
                            UserService.setUser(r.results[i]);
                            $timeout( function(){
                                $state.go('home.main');
                            }, 2000 );
                        }
                    }
                }, function(err){
                    console.log(err);
                });

        }

    }]);
})();