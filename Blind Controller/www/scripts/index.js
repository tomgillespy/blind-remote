// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );


    function onDeviceReady() {
        var address = 'http://10.120.60.6';

        $('#up').click(function (e) {
            e.preventDefault();
            $.get(address + '/up');
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            $.get(address + '/stop');
        });

        $('#down').click(function (e) {
            e.preventDefault();
            $.get(address + '/down');
        });
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();