Ext.define('Hell-O-Sender.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'home'
            },
            {
            	xtype: 'hell'
            },
            {
            	xtype: 'drei'
            }
               
        ]
    }
});
