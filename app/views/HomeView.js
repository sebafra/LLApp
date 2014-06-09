templates.homeView = "app/views/HomeView.html";

window.HomeView = Backbone.View.extend({

    title: Constants.APP_NAME,
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click .sq7":"showMenu"
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        return this;
    },

    showMenu:function () {
        var view = new MenuView();
        ViewNavigatorUtil.pushView( view );
    }

});