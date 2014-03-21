Ext.define('Hell-O-Sender.view.Drei',{
	extend: 'Ext.Map',
	xtype: 'drei',
	
	config: {
		title: 'TRY 2 DREI',
		iconCls: 'maps',
		xtype: 'map',
		useCurrentLocation: true,
		
		layout: 'fit',
		scrollable: true,
		styleHtmlContent: true,
		styleHtmlCls: 'drei',
		html: [].join(""),
		
		items: [
		       {
		    	   xtype: 'titlebar',
		    	   title: 'Die obligatorische dritte Seite.',
		    	   docked: 'top'
		       }
		       ]
	}
});
