templates.menuView = "app/views/MenuView.html";

window.MenuView = Backbone.View.extend({

    title: Constants.APP_NAME,
    destructionPolicy:'never',
    backLabel: "<span class='icon ion-chevron-left header'></span>",

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #btnSingle":"showSingle",
        "click #btnQuest":"showQuery",
        "click #btnAbuse":"showAbuse"
    },

    render:function (eventName) {
        var template = _.template(templates.menuView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        return this;
    },

    showSingle:function () {
        var view = new SingleView();
        ViewNavigatorUtil.pushView( view );
    },
    showQuery:function () {
        var view = new QueryView();
        ViewNavigatorUtil.pushView( view );
    },
    showAbuse:function () {
        var view = new AbuseView();
        ViewNavigatorUtil.pushView( view );
    }

});