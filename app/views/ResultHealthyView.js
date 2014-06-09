templates.resultHealthyView = "app/views/ResultHealthyView.html";

window.ResultHealthyView = Backbone.View.extend({

    title: "Resultado",
    destructionPolicy:'never',
    backLabel: "<span class='icon ion-chevron-left header'></span>",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click .nav":"refreshTab"

    },

     // función cuando se ejecuta el botón volver
    backCallback:function () {
        $(".viewNavigator_contentHolder").css("color","#edf0bb");
        $(".viewNavigator_header").css("background","#0a4368");
    },
    refreshTab:function () {
        setTimeout(function () {
        window.viewNavigator.refreshScroller();
    }, 300);
    },

    render:function (eventName) {
        var template = _.template(templates.resultHealthyView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        return this;
    },

});