jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("com.scs.utils.utils");
jQuery.sap.require("com.scs.model.settings");
	
sap.ui.controller("com.scs.view.Login", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.scs.view.Login
	 */
		onInit: function() {
			
		this._oView = this.getView();
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
		this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
		this._oRouter = this._oComponent.getRouter();
		this._oCatalog = this.byId("catalogTable");

		},
validateUser:function(){
	
		var that =this;//"sap.ui.getCore().byId('idLogin').getController();
	
	com.scs.utils.utils.logout(that,that.logoutSuccess,that.errorCallback)
	
},
logoutSuccess:function(data,status,headers,context){
	
		
		var uname=context.byId('uid').getValue();
		var pwd=context.byId('pwd').getValue();
		var creds={username:uname,password:pwd};
		// logout success
		// niw login
	if(JSON.parse(data).success) {
		var call = {};
	
		call.url = com.scs.model.settings.getBaseUrl() + "/SCSAdmin/php/user_login.php";
		call.headers = {
			ContentType: "application/x-www-form-urlencoded"
		};
		call.successCallback = context.loginSuccessCallback;
		call.errorCallback = context.errorCallback;
		call.method = "POST";
		call.dataStr = "data=" + JSON.stringify(creds);
		call.loadStr = context._oResourceBundle.getText("Loggingin");
		com.scs.utils.utils.dbcall(context, call);
		
		
	}
},
errorCallback:function(err,context){
	sap.m.MessageToast.show(context._oResourceBundle.getText("Transactionfailed"));
},
loginSuccessCallback:function(data,status,hdrs,context){
		if (data!=null&&JSON.parse(data)!=null) {
			if(JSON.parse(data).success){
				sap.m.MessageToast.show(context._oResourceBundle.getText("LoginSuccess"));
				if(JSON.parse(data).success!=null&&data!=null){
					// var oModel= new sap.ui.model.json.JSONModel();
					// oModel.setData(data);
					// sap.ui.getCore().setModel(oModel,'UD');
					// context._oView.byId("welcome").setText(this._oComponent.getText("welcome")+JSON.parse(data).display_name);
				}
				context.byId('uid').setValue("");
				context.byId('pwd').setValue("");
			//	app.to('idDashboard');
				context._oRouter.navTo("idDashboard", {
						from: "idLogin",
						entity: "Dashboard",//oEvent.getSource().getBindingContext().getPath().substr(1),
						tab: null
					});
			
			}else{
				sap.m.MessageToast.show(JSON.parse(data).message);
			//hardcoded for testing
					// app.to('idDashboard');
			//
			}
		}
	
		
},
validate: function(e) {

		if (e.getSource()) {
			com.scs.utils.utils.validate(e.getSource());
		}
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.scs.view.Login
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.scs.view.Login
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.scs.view.Login
	 */
	//	onExit: function() {
	//
	//	}

});