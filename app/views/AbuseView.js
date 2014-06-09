templates.abuseView = "app/views/AbuseView.html";

window.AbuseView = Backbone.View.extend({

    title: "&iquest;Si la relaci&oacute;n es da&ntilde;ina?",
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
    openExternalLink:function (event) {

   if ( !this.lastTimestamp || (new Date().getTime()-this.lastTimestamp) > 500) {

       var target = $( event.target );
       var href = target.attr("href");
       NativeUtil.openExternalURL( href );
   }

   this.lastTimestamp = new Date().getTime();
   event.stopPropagation();
   event.stopImmediatePropagation();
   event.preventDefault();
   event.cancelBubble();
   return false;
},

    render:function (eventName) {
        var template = _.template(templates.abuseView);
        var model = {isTablet:NativeUtil.isTablet()};
        this.$el.html(template(model));

        return this;
    },

});