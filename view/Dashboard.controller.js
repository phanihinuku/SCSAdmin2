sap.ui.controller("com.scs.view.Dashboard", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.scs.view.Dashboard
	 */
		onInit: function() {
			this._oView = this.getView();
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
			this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
			this._oRouter = this._oComponent.getRouter();
				this._oRouter.attachRoutePatternMatched(this._onRoutePatternMatched, this);
			
			// that=this;
			// this.byId("welcome").attachBrowserEvent("tab keyup", function(oEvent){
			// 	this._bKeyboard = oEvent.type == "keyup";
			// }, this);
		},
		openMenu:function(oEvent){
		var oButton = oEvent.getSource();
		var that= sap.ui.getCore().byId('dashboardView').getParent().getController();//sap.ui.getCore().byId('idDashboard');
		if(!that._menu){
		that._menu = new sap.ui.unified.Menu({
			items:[new sap.ui.unified.MenuItem({text:that._oResourceBundle.getText("Logout"),icon:"sap-icon://log",select:function(){app.back();}}),
			       new sap.ui.unified.MenuItem({text:that._oResourceBundle.getText("UserPreferences"),icon:"sap-icon://action-settings"}),
			       new sap.ui.unified.MenuItem({text:that._oResourceBundle.getText("AddUser"),icon:"sap-icon://add-contact",select:that.addUser}),
			       new sap.ui.unified.MenuItem({text:that._oResourceBundle.getText("SMSGateway"),icon:"sap-icon://iphone-2",select:function(){window.open('https://www.twilio.com/user/billing', 'Twilio'); }})
			]
//		https://www.twilio.com/user/billing
		});
		this.addDependent(that._menu);
	}
		var eDock = sap.ui.core.Popup.Dock;
		//that._menu.open( oButton);
		that._menu.open(that._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
	},
	
	addUser:function(oEvent){
		var that= sap.ui.getCore().byId('dashboardView').getParent().getController();
		that._oRouter.navTo("idAdduser", {
						from: "idDasdboard",
						entity: "AddUser"//oEvent.getSource().getBindingContext().getPath().substr(1),
						// tab: null
					});
	},
		_onRoutePatternMatched:function(oEvent){
			alert();
		}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.scs.view.Dashboard
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.scs.view.Dashboard
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.scs.view.Dashboard
	 */
	//	onExit: function() {
	//
	//	}

});