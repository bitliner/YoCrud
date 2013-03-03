angular.module( <%= name %> + 'Resource', ['ngResource']).
    factory( <%= name %> , ['$resource', function ($resource) {
    return $resource('/' + <%= name %> + '/:_id', {_id:'@_id'}, {update:{method:'PUT'}})
}]);
