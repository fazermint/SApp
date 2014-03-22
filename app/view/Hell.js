Ext.define('Hell-O-Sender.view.Hell',{
	extend: 'Ext.Panel',
	xtype: 'hell',
	
	config: {
		title: 'Zur Hölle',
        iconCls: 'arrow_down',
        
        xtype: 'formpanel',
        layout: 'vbox',	
		scrollable: true,

        items: [
               {
			xtype: 'titlebar',
            title: 'Hell-O-Sender',
            docked: 'top',
            style: 'background: #B62828'
            
               },
             
                	   
                               {
                                   xtype: 'fieldset',
                                   title: 'Jetzt ist DEINE Chance gekommen...!',
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
                                   width: 250,
                                   margin: 'auto',
                                   ui: 'decline',
                                   handler: function() {
                                       this.up('formpanel').submit();
                                   }
                               }
                           ]
               }
			
		
});