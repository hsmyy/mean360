'use strict';

angular.module('mean.mean360').factory('toastr', [
    function () {
        function show(type, position, message) {
            window.toastr.options.positionClass = position;
            window.toastr[type](message);
        }

        function info(position, message) {
            show('info', position, message);
        }

        function error(position, message) {
            show('error', position, message);
        }

        function warning(position, message) {
            show('warning', position, message);
        }

        function success(position, message) {
            show('success', position, message);
        }

        return {
            toaster: show,
            info: info,
            success: success,
            warning: warning,
            error: error
        };
    }
]);
