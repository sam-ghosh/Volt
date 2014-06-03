Ext.define('Volt.view.TabPanelMain', {
    extend: 'Ext.TabPanel',

    requires:[ 'Volt.view.FeedView'

    ],

    xtype: 'tabPanelMain',
    config: {
        tabBar:{
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            html: 'Placeholder text',
            styleHtmlContent : true
            //styleHtmlContent: true
        },
        items:[
            { xtype: 'feedViewCard'},




        ]

    }
});
