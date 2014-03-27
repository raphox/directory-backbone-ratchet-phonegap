var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

if (!isTablet) {
	var resizeId;

	//when resizing the site, we adjust the heights of the sections
	$(window).resize(function() {
		//in order to call the functions only when the resize is finished
		//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 500);
	});

}

var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

$(window).bind(orientationEvent , function() {
	if(isTablet){
		setTimeout(doneResizing, 500);
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
