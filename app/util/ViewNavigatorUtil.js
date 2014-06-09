ViewNavigatorUtil = {
	intent: 8,
	animationDuration: 800,
	times: 5,
	done: false,
	view:null,
	replaceView: function( view ){
		try{
			this.done = false;
			this.view = view;
			this.times = this.intent; 
			if(window.viewNavigator.animating){
				
		        var self = this;
		        this.onReplaceViewPerform = function(){
		            self.replaceViewPerform();
		        };
				setTimeout( self.onReplaceViewPerform , this.animationDuration );

			} else {
				this.done = true;
	    		window.viewNavigator.replaceView( this.view );
			}
		}catch(e){}
		
    },
    replaceViewPerform: function( ){
    	if(this.done) return;
		if(window.viewNavigator.animating){
			if(this.times > 0){
				
		        var self = this;
		        this.onReplaceViewPerform = function(){
		            self.replaceViewPerform();
		        };

		        this.times--;
		        setTimeout( self.onReplaceViewPerform , this.animationDuration );
			}
		} else {
			this.done = true;
			window.viewNavigator.replaceView( this.view );
		}
    },
    
	pushView: function( view ){
		this.done = false;
		this.view = view;
		this.times = this.intent; 

		try{
			if(window.viewNavigator.animating){

		        var self = this;
		        this.onPushViewPerform = function(){
		            self.pushViewPerform();
		        };
				setTimeout( self.onPushViewPerform , this.animationDuration );

			} else {
				this.done = true;
	    		window.viewNavigator.pushView( this.view );
			}
		}catch(e){}

	},
    pushViewPerform: function( ){
    	if(this.done){
    		return;
    	}
		if(window.viewNavigator.animating){
			if(this.times > 0){

				var self = this;
		        this.onPushViewPerform = function(){
		            self.pushViewPerform();
		        };
		        
		        this.times--;
				setTimeout( self.onPushViewPerform , this.animationDuration );
			}
		} else {
			this.done = true;
			window.viewNavigator.pushView( this.view );
		}
    },
    popView: function( ){
    	console.log("******************************vnu.popview");
		window.viewNavigator.popView();
    },
    removeView: function() {
    	if (window.viewNavigator.animating || window.viewNavigator.history.length <= 1 )
    		return;
    	
    	window.viewNavigator.history.pop();	
    }

    
}