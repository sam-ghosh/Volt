Ext.define('Volt.view.TabPanelMain', {
    extend: 'Ext.TabPanel',

    requires:[ 'Volt.view.FeedView'

    ],

    xtype: 'TabPanelMain',
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
            
            { 
            	xtype: 'feedViewCard',
            	html: 'NewView',
            	title: 'NewView'
            	
            },


        ]

    }
});