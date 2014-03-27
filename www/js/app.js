var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

$(window).bind(orientationEvent , function() {
	if(isTablet){
		setTimeout(doneResizing, 250);
	}
});

function doneResizing() {
    var container = $('.content');
    var windowsWidth = $(window).width();
        windowsHeight = $(window).height();

    container.width(windowsWidth);
    container.height(windowsHeight);

    console.log('resize');
}
