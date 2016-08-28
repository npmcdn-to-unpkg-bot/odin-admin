var app = angular.module('odin.importerControllers', []);

app.factory('model', function($resource) {
    return $resource();
});

function ImporterListController($scope, $location, rest, $rootScope, Flash, Alertify, modelService) {

    modelService.initService("User", "users", $scope);

    $scope.confirmDelete = function(item) {
        modelService.confirmDelete(item);
    }

    $scope.deleteModel = function(model) {
        modelService.delete($scope, model);
    };

    $scope.edit = function(model) {
        modelService.edit($scope, model);
    }

    $scope.view = function(model) {
        modelService.view($scope, model);
    }

    modelService.loadAll($scope);
}

function ImporterViewController($scope, Flash, rest, $routeParams, $location, modelService) {
    modelService.initService("User", "users", $scope);

    modelService.findOne($routeParams, $scope);


    $scope.edit = function(model) {
        modelService.edit($scope, model);
    }
}

function ImporterCreateController($scope, $location, usSpinnerService, Alertify, CkanImporterService, rest) {

    $scope.add = function(isValid) {
        usSpinnerService.spin('spinner');
        if (isValid) {
            CkanImporterService.Import(rest);
        }
    }





    // modelService.initService("User", "users", $scope);

    // $scope.model = new model();
    // $scope.add = function(isValid) {
    //     usSpinnerService.spin('spinner');
    //     if (isValid) {
    //         rest().save({
    //             type: $scope.type
    //         }, $scope.model, function(resp) {
    //             usSpinnerService.stop('spinner');
    //             Alertify.alert('El usuario se ha creado exitosamente.');
    //             var url = '/' + $scope.type + '/';
    //             $location.path(url);

    //         }, function(error) {
    //             usSpinnerService.stop('spinner');
    //             if (error.data && error.data.username) {
    //                 Alertify.alert('El usuario ya existe.');
    //             } else {
    //                 Alertify.alert('Ha ocurrido un error al crear el usuario.');
    //             }
    //         });
    //     }
    // };
}

function ImporterEditController($scope, Flash, rest, $routeParams, model, $location, modelService, usSpinnerService, Alertify) {
    modelService.initService("User", "users", $scope);

    $scope.model = new model();
    $scope.update = function(isValid) {
        usSpinnerService.spin('spinner');
        if (isValid) {
            rest().update({
                type: $scope.type,
                id: $scope.model.id
            }, $scope.model, function() {
                usSpinnerService.stop('spinner');
                Alertify.alert('El usuario se ha editado exitosamente.');
                var url = '/' + $scope.type + '/';
                $location.path(url);
            }, function(error) {
                usSpinnerService.stop('spinner');
                if (error.data && error.data.username) {
                    Alertify.alert('El usuario ya existe.');
                } else {
                    Alertify.alert('Ha ocurrido un error al editar el usuario.');
                }
            });
        }
    };

    $scope.load = function() {
        $scope.model = rest().findOne({
            id: $routeParams.id,
            type: $scope.type
        }, function() {
            // $scope.model.organization=$scope.model.organization.id
        });
    };

    $scope.load();
}