sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("queroquerons.despesas.controller.Home", {
			
			oRoute: null,
			
			onInit: function () {
				this.oRoute = this.getOwnerComponent().getRouter()
				var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/zportaldespesas_srv", { useBatch: false })

				this.getView().setModel(oModel);

			var tst =	sap.ui.getCore().getModel().getData().Data123

			},

			onTilePress: function(oEvent){
				var oAppId = oEvent.getSource().getBindingContext()
				var oPath = oAppId.getPath()

				if ( oPath.includes('APROVAR_DESPESAS') ) {
					var sUrl = window.location.protocol + '//' + window.location.host + '/sap/bc/bsp/sap/zportal_workflw/index.html?user=' + window.location.hash
				}else if( oPath.includes('CONSULTAR_DESPES') ){
					var sUrl = window.location.protocol + '//' + window.location.host+ '/sap/bc/bsp/sap/zportal_conlan/index.html' + window.location.hash
				}else if( oPath.includes('CONSULTAR_ORCAME') ){
					var sUrl = window.location.protocol + '//' + window.location.host + '/sap/bc/bsp/sap/zportal_orcamen/index.html?user=' + window.location.hash
				}else if( oPath.includes('SOLICITAR_SUPLEM') ){
					var sUrl = window.location.protocol + '//' + window.location.host + '/sap/bc/bsp/sap/zportal_suplem/index.html?user=' + window.location.hash
				}

				if(sUrl){
				window.location.assign(sUrl)
				}
			},
			toLower: function (sIcon){
				
				if(typeof sIcon === "string"){
				return sIcon.toLowerCase()
				}
				
				return ""
			},						

			onLogout: function logoff(){
				var sUrl = window.location.protocol + '//' + window.location.host+ '/sap/bc/bsp/sap/zportal_login/index.html'
				window.location.replace(sUrl)

				// $.ajax({
				// 	type: "GET",
				// 	url: "/sap/public/bc/icf/logoff",  //Clear SSO cookies: SAP Provided service to do that
				//  }).done(function(data){ //Now clear the authentication header stored in the browser
				// 					 if (!document.execCommand("ClearAuthenticationCache")) {
				// 						  //"ClearAuthenticationCache" will work only for IE. Below code for other browsers
				// 						  $.ajax({
				// 										type: "GET",
				// 										url: "/sap/public/bc/icf/logoff", //any URL to a Gateway service
				// 										username: 'dummy', //dummy credentials: when request fails, will clear the authentication header
				// 										password: 'dummy',
				// 										statusCode: { 401: function() {
				// 												  //This empty handler function will prevent authentication pop-up in chrome/firefox
				// 										} },
				// 										error: function() {
				// 											 //alert('reached error of wrong username password')
				// 										}
				// 						 });
				// 					 }
				//  })
		 
				 

				//  setTimeout(() => { window.location.reload(); }, 2000);
					 
				}

		});
	})
