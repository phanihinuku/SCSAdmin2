jQuery.sap.require("sap.m.StandardTile");
// Load the rounded tile control
jQuery.sap.require("com.scs.view.RoundedTile");

sap.ui.jsview("com.scs.view.Dashboard", {id:"dashboardView",

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.scs.view.Dashboard
	 */

getControllerName : function() {
						return "com.scs.view.Dashboard";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf com.scs.view.Dashboard
					 */
					createContent : function(oController) {
						
						
							this._oView = this;
							this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
						this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
						this._oRouter = this._oComponent.getRouter();
						this._oCatalog = this.byId("catalogTable");
										
						
						
						// var tilesM = new sap.ui.model.json.JSONModel();
						// tilesM.loadData('../model/tiles.json');
						// var tiles = tilesM.getData();
						var tiles = [ {
							title : this._oResourceBundle.getText("ImportCustomers"),
							icon : "excel-attachment",
							 iconColor : "#0000b3",
							// bgColor : "#0047b3",//"rgb(57, 123, 110)",
							 borderColor : "rgb(57, 123, 110)",
							press : "upload"
						}, {
							title : this._oResourceBundle.getText("CustomerSegmentation"),
							icon : "search",
							 iconColor : "#0000b3",
						//	 bgColor : "#0047b3",//"rgb(57, 123, 110)",
							 borderColor : "rgb(57, 123, 110)",
							press : "contacts"
						}, 
//						{
//							title : this._oResourceBundle.getText("Compose"),
//							icon : "add",
//							 iconColor : "#ffffff",
//							 bgColor : "#0047b3",//"rgb(57, 123, 110)",
//							 borderColor : "rgb(57, 123, 110)",
//							
//							press : "groups"
//						},
						{
							title : this._oResourceBundle.getText("SMSTemplates"),
							icon : "iphone",
							press : "templates",
							 iconColor : "#0000b3",// "#ffffff",
						//	 bgColor : "#0047b3",//"rgb(57, 123, 110)",
							 borderColor : "rgb(57, 123, 110)"
								

						},

						{
							title : this._oResourceBundle.getText("SMSBox"),
							icon : "inbox",
							press : "inbox",
							 iconColor : "#00b36b",// "#ffffff",
								//	 bgColor : "#0047b3",//"rgb(57, 123, 110)",
									 borderColor : "rgb(57, 123, 110)"
								

						},
//						{
//							title : this._oResourceBundle.getText("AddUser"),
//							icon : "add-contact",
//							press : "addUser"
//
//						},

						{
							title : this._oResourceBundle.getText("ImportSMS"),
							icon : "measurement-document",
							// iconColor : "#ffffff",
							// bgColor : "rgb(57, 123, 110)",
							// borderColor : "rgb(57, 123, 110)",
							press : "uploadSchedule"
						}, {
							title : this._oResourceBundle.getText("ImportAppointmentSMS"),
							icon : "appointment-2",
							// iconColor : "#ffffff",
							// bgColor : "rgb(57, 123, 110)",
							// borderColor : "rgb(57, 123, 110)",
							press : "appointmentReminder"
						} ];
						this.oTilesContainer = new sap.m.TileContainer();
						this.oTilesContainer.setHeight("100%");
						this.oTilesContainer.setVisible(true);

						for ( var c in tiles) {
							var tileItem1 = new RoundedTile();
							tileItem1.setTitle(tiles[c]["title"]);
							tileItem1.setIcon("sap-icon://" + tiles[c]["icon"]);
							if (tiles[c]["iconColor"])
								tileItem1.setIconColor(tiles[c]["iconColor"]);
							if (tiles[c]["bgColor"])
								tileItem1.setBgColor(tiles[c]["bgColor"]);
							if (tiles[c]["borderColor"])
								tileItem1
										.setBorderColor(tiles[c]["borderColor"]);

							if (tiles[c]["press"] === "upload") {
								tileItem1
										.attachPress(this.getController().upload);

							} else if (tiles[c]["press"] === "contacts") {
								tileItem1
										.attachPress(this.getController().contacts);

							} else if (tiles[c]["press"] === "groups") {
								tileItem1
										.attachPress(this.getController().groups);

							} else if (tiles[c]["press"] === "templates") {
								tileItem1
										.attachPress(this.getController().templates);

							} else if (tiles[c]["press"] === "inbox") {
								tileItem1
										.attachPress(this.getController().inbox);

							} else if (tiles[c]["press"] === "addUser") {
								tileItem1
										.attachPress(this.getController().addUser);

							} else if (tiles[c]["press"] === "uploadSchedule") {
								tileItem1
										.attachPress(this.getController().uploadSchedule);
							} else if (tiles[c]["press"] === "appointmentReminder") {
								tileItem1
										.attachPress(this.getController().appointmentReminder);
							}

							this.oTilesContainer.addTile(tileItem1);
						}
						// Create the standard UI5 Tile container

						// Creates and returns the Page to be shown by the view

						return new sap.m.Page("dashboardView",
								{
									// title: "Dashboard",
									// showHeader:false,
									showNavButton : false,
									navButtonPress : [ oController,
											oController.goBack ],
									// backgroundImage:'http://tse2.mm.bing.net/th?id=OIP.M1648e02d0a30396db1c796fd1477fc82o0&pid=15.1'
									enableScrolling : false,
									subHeader : new sap.m.Bar(
											{
												contentMiddle : [new sap.m.Text(
														{
															text :  this._oResourceBundle.getText("DashBoard")
														}) ],
												contentRight : [
														new sap.m.Text({
															id : "welcome2"
														})
														 ]
											}),
									customHeader : new sap.m.Bar(
											{
												contentMiddle : [ new sap.m.Text(
														{
															text :  this._oResourceBundle.getText("SCS")
														}) ],
												contentRight : [
														new sap.m.Button({
															id : "welcome",
																icon:"sap-icon://navigation-down-arrow",
																	press:[oController,oController.openMenu]
														})
//														,
//														new sap.m.Button(
//																{
//																	icon : "sap-icon://log",
//																	press : [
//																			oController,
//																			oController.goBack ]
//																}) 
														]
											}),
									content : [ this.oTilesContainer ],
									footer:new sap.m.Bar({contentMiddle:[new sap.m.Text({text:"{i18n>SCSFOOTER}"})]})
								});

					}

});