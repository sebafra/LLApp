templates.queryView = "app/views/QueryView.html";

window.QueryView = Backbone.View.extend({

    title: "&iquest;Si la relaci&oacute;n es da&ntilde;ina?",
    destructionPolicy:'never',
    backLabel: "<span class='icon ion-chevron-left header'></span>",
    query: undefined,
    
    initialize: function(options) {
        this.query = options;
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #yes":"queryYes",
        "click #no":"queryNo"

    },

     // función cuando se ejecuta el botón volver
    backCallback:function () {
        $(".viewNavigator_contentHolder").css("color","#edf0bb");
        $(".viewNavigator_header").css("background","#0a4368");
    	App.queryIdx--;
    	
    	console.log(">>>>>>>>>>>>>>>>>"+App.queryIdx);
    },
    
    queryYes: function(){
    	App.querysAnswers[App.queryIdx] = 1;
    	this.nextPage();
    },
    
    queryNo: function(){
    	App.querysAnswers[App.queryIdx] = 0;
    	this.nextPage();
    },
    
    nextPage: function(){
    	App.queryIdx++;

    	if(App.queryIdx < App.queryIdxMax){
    		this.nextQuery();
    	} else {
    		var total = 0;
    		for(i = 0;i < App.queryIdxMax ; i++){
    			total += App.querysAnswers[i];
    		}

    		
    		if(total < 5)
     	   		this.resultAbuse();
    		else if(total < 10)
    			this.resultMiddle();
    		else
     	   		this.resultHealthy();
     	}
    },
    
    nextQuery: function(){
    	var query = {
    			queryNumber:App.queryIdx + 1,
    			query:App.querys[App.queryIdx]
    	};
    	
        var view = new QueryView(query);
        ViewNavigatorUtil.replaceView( view );
    },
    
    resultAbuse:function () {
        var view = new ResultAbuseView();
        ViewNavigatorUtil.replaceView( view );
    },
    resultMiddle:function () {
        var view = new ResultMiddleView();
        ViewNavigatorUtil.replaceView( view );
    },
    resultHealthy:function () {
        var view = new ResultHealthyView();
        ViewNavigatorUtil.replaceView( view );
    },

    render:function (eventName) {
        var template = _.template(templates.queryView);
        this.$el.html(template(this.query));

        return this;
    },

});