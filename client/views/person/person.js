
  ngMeteorForms
      .controller('personController', ['$scope', function ($scope) {
        var self = $scope;
        window.peterscope = $scope;

        var myModel = FlexiModels['person'].findOne() || {};
        $scope.setModel(myModel);

  //        $scope.setModel({gender: 'male', name: {firstName: 'Peter', lastName: 'Smith'}});
  //
  //        $scope.save = function() {
  //            console.log("Save from person controller only!");
  //        };
  //        $scope.preSave = function(){
  //            console.log('preSave from person controller');
  //        };
  //        $scope.postSave = function(){
  //            console.log('postSave from person controller');
  //        };
  //        $scope.hello = function(stuff){
  //            console.log('hello from person controller');
  //        }
      }]);

  //ngMeteorForms.displayStringRegistry["model.addresses"] = function(item){
  //    return sprintf("%(street1)s, %(region.city)s, %(region.state.name)s ", item);
  //};
  //
  //ngMeteorForms.displayStringRegistry["address"] = function(item){
  //    return sprintf("%(region.city)s, %(region.state.name)s ", item);
  //};

  //ngMeteorForms.templateRegistry.mffField = 'myFormField';

