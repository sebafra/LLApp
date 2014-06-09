templates.queryView = "app/views/QueryView.html";

window.QueryView = Backbone.View.extend({

    title: "&iquest;Si la relaci&oacute;n es da&ntilde;ina?",
    destructionPolicy:'never',
    backLabel: "<span class='icon ion-chevron-left header'></span>",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #yes":"resultAbuse",
        "click #no":"resultHealthy"

    },

     // función cuando se ejecuta el botón volver
    backCallback:function () {
        $(".viewNavigator_contentHolder").css("color","#edf0bb");
        $(".viewNavigator_header").css("background","#0a4368");
    },
    resultAbuse:function () {
        var view = new ResultAbuseView();
        ViewNavigatorUtil.pushView( view );
    },
    resultMiddle:function () {
        var view = new ResultMiddleView();
        ViewNavigatorUtil.pushView( view );
    },
    resultHealthy:function () {
        var view = new ResultHealthyView();
        ViewNavigatorUtil.pushView( view );
    },

    render:function (eventName) {
        var template = _.template(templates.queryView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        return this;
    },

});