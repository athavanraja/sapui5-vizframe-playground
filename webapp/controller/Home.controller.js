sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.rajavizpg.controller.Home", {
onInit: function() {
			var mcc = this.getView().byId("QMESCC");
			mcc._oFullScreenButton.attachPress(this.handleFullScreen, mcc);
			var pcc = this.getView().byId("VPROPCC");
			pcc._oFullScreenButton.attachPress(this.handleFullScreen, pcc);
			var dcc = this.getView().byId("QDIMCC");
			dcc._oFullScreenButton.attachPress(this.handleFullScreen, dcc);
			var fcc = this.getView().byId("QFEEDCC");
			fcc._oFullScreenButton.attachPress(this.handleFullScreen, fcc);
			var datacc = this.getView().byId("QDATACC");
			datacc._oFullScreenButton.attachPress(this.handleFullScreen, datacc);
			var tcc = this.getView().byId("QTABDCC");
			tcc._oFullScreenButton.attachPress(this.handleFullScreen, tcc);
		},
		handleCBSelectionChange: function(e) {
			var ddata = [];
			var cm = this.getView().getModel("demo_data");
			var cmd = cm.getData();
			cm.setData(ddata);
			cm.setData(cmd);
		},
		handleLiveDataChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.data = sObj;
			} catch (err) {
				jQuery.sap.log.error("Data:" + err);
			}
		},
		handleLiveMesChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.measures = sObj;
			} catch (err) {
				jQuery.sap.log.error("Measures:" + err);
			}
		},
		handleLiveDimChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.dimensions = sObj;
			} catch (err) {
				jQuery.sap.log.error("Dimensions:" + err);
			}
		},
		handleLiveFeedChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.feeds = sObj;
			} catch (err) {
				jQuery.sap.log.error("Feeds:" + err);
			}
		},
		handleLiveTabDChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.tabledefinition = sObj;
			} catch (err) {
				jQuery.sap.log.error("Table Definition:" + err);
			}
		},
		handleLivePropChange: function(e) {
			var sValue = e.getParameter("value");
			try {
				var sObj = JSON.parse(sValue);
				var cm = this.getView().getModel("demo_data");
				var cmd = cm.getData();
				cmd.vizproperties = sObj;
			} catch (err) {
				jQuery.sap.log.error("Viz Properties:" + err);
			}
		},
		handleFullScreen: function(e) {
			var cc = this.getContent();
			var ccc = cc[0];
			var mta = ccc.getAggregation("content");
			if (mta.getGrowing()) {
				mta.setGrowing(false);
			} else {
				mta.setGrowing(true);
			}
		},
		columnsFactory: function(sId, oContext) {
			var oColumnDefinition = new sap.ui.table.Column({
				label: "{demo_data>name}",
				sortProperty: "{demo_data>value}",
				template: new sap.m.Label().bindProperty("text", "demo_data>" + oContext.getProperty("value")),
				//template: new sap.m.Input().bindProperty("value", "demo_data>"+oContext.getProperty("value")),
				hAlign: "{demo_data>align}"
			});
			return oColumnDefinition;
		},
		vizPropertyFormatter: function(vp) {

			return (vp);
		},
		feedsFactory: function(sId, oContext) {
			var oFeed = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "{demo_data>uid}",
				type: "{demo_data>type}",
				values: [oContext.getProperty("values")]
			});
			return oFeed;
		},
		measuresFactory: function(sId, oContext) {
			var oMeasureDefinition = new sap.viz.ui5.data.MeasureDefinition({
				name: "{demo_data>name}",
				value: {
					path: oContext.getProperty("value")
				}
			});
			return oMeasureDefinition;

		},
		dimsFactory: function(sId, oContext) {
			var oDimensionDefinition = new sap.viz.ui5.data.DimensionDefinition({
				title: "{demo_data>name}",
				name: "{demo_data>name}",
				value: {
					path: oContext.getProperty("value")
				}
			});
			return oDimensionDefinition;

		},
		objToString: function(val) {
			var ostr = JSON.stringify(val, null, "\t");
			return ostr;

		}

	});
});