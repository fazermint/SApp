Ext.define('Hell-O-Sender.view.Home',{
	extend: 'Ext.Panel',
	xtype: 'home',
	
	config: {
		title: 'Zu Hause',
		iconCls: 'home',
		
		layout: 'fit',
		scrollable: true,
		styleHtmlContent: true,
		styleHtmlCls: 'zuHause',
		html: ['<h1>HOME SWEET HOME</h1>',
		       '<img src="http://3.bp.blogspot.com/-ny9jfMEUG4g/UMp_yoSrZII/AAAAAAAAM58/AzsLa9ng1R8/s1600/casa-1.jpg">'].join(""),
		
		items: [
		       {
		    	   xtype: 'titlebar',
		    	   title: 'In Sicherheit!',
		    	   docked: 'top'
		       }
		       ]
	}
});