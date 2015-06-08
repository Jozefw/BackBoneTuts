$(function(){

	new CurrentTimeView({
		el: document.getElementById("current-time")
	});
});

// give your data a name
var newDataFlag = 'Data-Arrived';
var Dispatcher = _.extend({},Backbone.Events);

setInterval(function(){
	var currentTime = (new Date()).toLocaleTimeString();
	Dispatcher.trigger(newDataFlag, currentTime);
},1000);


var CurrentTimeView = Backbone.View.extend({
	initialize: function(){
		// bind "render" to this view with Underscores "bindAll"
		_(this).bindAll('render');
		// render this view when new data is broadcast
		Dispatcher.on(newDataFlag, this.render);
	},

	render: function(currentTime){
			// set the DOMS elements text content to the clocks current time
			this.el.textContent = currentTime;
		}
	});


