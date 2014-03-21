Ext.define('Hell-O-Sender.view.Hell',{
	extend: 'Ext.Panel',
	xtype: 'hell',
	
	config: {
		title: 'Das TOR',
        iconCls: 'delete',
        
        xtype: 'formpanel',
        layout: 'vbox',	

        items: [
               {
			xtype: 'titlebar',
            title: 'Zu spät mein Lieber ...!',
            docked: 'top',
               },
             
                	   
                               {
                                   xtype: 'fieldset',
                                   title: 'Jetzt bist DU dran.',
                                   instructions: 'Wenn schickst DU in die Hölle?',
                                   height: 285,
                                   items: [
                                       {
                                           xtype: 'textfield',
                                           label: 'OPFER'
                                       },
                                       {
                                           xtype: 'textfield',
                                           label: 'LEIDEN'
                                       },
                                       {
                                           xtype: 'togglefield',
                                           label: 'Xtra-Devil aktivieren?'
                                       }
                                   ]
                               },
                               {
                                   xtype: 'button',
                                   text: 'Ab in die Hölle ... ]:->',
                                   ui: 'confirm',
                                   handler: function() {
                                       this.up('formpanel').submit();
                                   }
                               }
                           ]
               }
			
		
});