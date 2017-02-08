/**
 * Created by tanner on 2/7/17.
 */
angular.module('friendsList').controller('mainCtrl', function ($scope)
{
    $scope.friends = ["Josh", "Bard", "Eli"];
    $scope.addFriend = function ()
    {
        $scope.friends.push($scope.inputFriend);
        $scope.inputFriend = null;
    };
});
