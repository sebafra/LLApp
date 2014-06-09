templates.singleView = "app/views/SingleView.html";

window.SingleView = Backbone.View.extend({

    title: "No tengo pareja",
    destructionPolicy:'never',
    backLabel: "<span class='icon ion-chevron-left header'></span>",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
        //this.changeColors();
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
    // changeColors:function(){
    //     $(".viewNavigator_contentHolder").css("color","#EE4636");
    //     $(".viewNavigator_header").css("background","#EE4636");
    // },

    render:function (eventName) {
        var template = _.template(templates.singleView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));


        return this;
    },


});