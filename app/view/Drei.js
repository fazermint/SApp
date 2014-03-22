Ext.define('Hell-O-Sender.view.Drei',{
	extend: 'Ext.Map',
	xtype: 'drei',
	
	config: {
		title: 'Blut Spuren',
		iconCls: 'maps',
		xtype: 'map',
		useCurrentLocation: true,
		
		
		layout: 'fit',
		scrollable: true,
		styleHtmlContent: true,
		styleHtmlCls: 'drei',
		html: [].join(""),
		
		mapOptions: {styles: [
		             {
		            	    "featureType": "water",
		            	    "stylers": [
		            	      { "color": "#ff0000" }
		            	    ]
		            	  },{
		            	    "featureType": "poi",
		            	    "stylers": [
		            	      { "visibility": "off" }
		            	    ]
		            	  },{
		            	    "featureType": "administrative.land_parcel",
		            	    "stylers": [
		            	      { "visibility": "off" }
		            	    ]
		            	  },{
		            	    "elementType": "labels.icon",
		            	    "stylers": [
		            	      { "visibility": "off" }
		            	    ]
		            	  },{
		            	    "featureType": "landscape.man_made",
		            	    "stylers": [
		            	      { "color": "#808080" },
		            	      { "weight": 0.1 }
		            	    ]
		            	  },{
		            	    "featureType": "road",
		            	    "stylers": [
		            	      { "color": "#d5d9d6" }
		            	    ]
		            	  },{
		            	    "featureType": "landscape.natural",
		            	    "stylers": [
		            	      { "saturation": -92 }
		            	    ]
		            	  },{
		            	  }
		            	],},
		
		items: [
		       {
		    	   xtype: 'titlebar',
		    	   title: 'BLOODY MAPS',
		    	   docked: 'top',
		           style: 'background:#808080',
		        	   

		       }
		       ]
	}
});
