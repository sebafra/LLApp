
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


$( document ).ready(function() {
	if(App.isWebEnvironment()) onDeviceReady();
});


function onDeviceReady() {

	$.ajaxSetup({ cache: false });

	loadTemplates( appTemplatesLoaded );
    //loadConstants();

}

function appTemplatesLoaded() {

    $("body").empty();

    //Setup the ViewNavigator
    var view = new HomeView();
    window.viewNavigator = new ViewNavigator( 'body' );
    window.viewNavigator.pushView( view );
    document.addEventListener("backbutton", onBackKey, false);
}

function onBackKey( event ) {
    if ( window.viewNavigator.history.length > 1 ){
        event.preventDefault();
        window.viewNavigator.popView();
        return false;
    }
    navigator.app.exitApp();
}
function loadConstants() {
    setTimeout(function(){
        $("#urlWeb").html(URL_WEB);
        $("#urlFacebook").html(URL_FACEBOOK);
    }, 1000);
}



