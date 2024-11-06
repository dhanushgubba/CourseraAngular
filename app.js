(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        var lunchCtrl = this;
        lunchCtrl.items = '';
        lunchCtrl.message = '';

        lunchCtrl.checkIfTooMuch = function() {
            if (!lunchCtrl.items || lunchCtrl.items.trim() === '') {
                lunchCtrl.message = 'Please enter data first';
            } else {
                var itemsArray = lunchCtrl.items.split(',').filter(function(item) {
                    return item.trim() !== ''; 
                });

                if (itemsArray.length <= 3) {
                    lunchCtrl.message = 'Enjoy!';
                } else {
                    lunchCtrl.message = 'Too much!';
                }
            }
        };
    }
})();
