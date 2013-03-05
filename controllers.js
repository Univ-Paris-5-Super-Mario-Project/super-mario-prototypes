function HomeCtrl($scope) {
  console.log('Home, sweet home!')
}

function GameCtrl($scope) {
  console.log('Let\'s play!')
}

HomeCtrl.$inject = ['$scope']
GameCtrl.$inject = ['$scope']