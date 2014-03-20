Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Letzte Chance',
                iconCls: 'more',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Bist DU sicher?'
                },

                html: [
                    "Du bist gerade dabei einer der größten Fehler deines Lebens zu machen ...<br/>",
                    "Nutze deine letzte Chance und geh nach Hause zu deiner Mama.<br/>",
                    "... OK. Du hast es nicht anders gewollt."
                ].join("")
            },
            {
                title: 'Das TOR',
                iconCls: 'delete',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Zu spät mein Lieber ...!'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
            
        ]
    }
});
