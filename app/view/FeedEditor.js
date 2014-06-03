/**
 * Created by Som on 03/06/2014.
 */
Ext.define("Volt.view.FeedEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",

    xtype: 'feededitor',

    config:{
        scrollable:'vertical',

        items:[
            {
                //top toolbar
                xtype: 'toolbar',
                docked: 'top',
                title: 'Edit Feed',
                items:[
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Home',
                        itemId: 'backButton'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'Save',
                        itemId: 'Save'
                    }
                ]

            },
            {
                //fieldset
                xtype: 'fieldset',
                items:[
                    {
                        //textfield for title
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title',
                        required: true,
                        itemId: 'feedTitleEditor'
                    },
                    {
                        //textarea for feed text
                        xtype: 'textareafield',
                        name: 'narrative',
                        label: 'Narrative',
                        //required: true
                        itemId: 'feedNarrativeEditor'
                    }
                ]

            },
            {
                //bottom toolbar
                xtype: 'toolbar',
                docked: 'bottom',
                items:[
                    {
                        xtype: 'button',
                        iconCls: 'trash',
                        iconMask: true,
                        text: 'Delete',
                        itemId: 'deleteButton'
                    }
                ]
            }
        ]

    },

    initialize: function () {

        this.callParent(arguments);

    }
});