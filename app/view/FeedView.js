/**
 * Created by som on 24/05/2014.
 */
	Ext.define('Volt.view.FeedView', {
        extend: 'Ext.Panel',

        requires: [
            'Ext.TitleBar',
            'Ext.Button',
            'Ext.Toolbar',
            'Volt.view.FeedListView'
        ],

        xtype: 'feedViewCard',

        config: {
            iconCls: 'home',
            title: 'FeedView',

            layout: {
                type: 'vbox'
            },

            items: [
                {
                    xtype: 'toolbar',
                    title: 'Home',
                    docked: 'top',
                    items: [
                        {   xtype: 'spacer'},
                        {
                            xtype: 'button',
                            text: 'New Feed',
                            ui: 'action',
                            id: 'new_feed_button',

                            handler: function(button){
                                console.log('button tapped inline handler, xtype =');
                                this.fireEvent("newFeedCommand", this);
                                debugger;
                            },
                            scope: this
                        }
                    ]
                },
                {
                    xtype: 'list',
                    itemId: 'id_feedList',
                    store: 'Feeds',
                    flex: 1,
                    loadingText : 'Loading Notes...',
                    emptyText : '<div class="notes-list-empty-text">No notes found.</div>',
                    onItemDisclosure: true,
                    itemTpl: '<div class="list-item-title">{title}</div> <div class="list-item-narrative">{narrative}</div>',

                    listeners:{
                        itemtap: 'onFeedTap',
                        disclose: function(list,record,target,index,event,options){
                            console.log('Disclosed item = ',index);
                            //this.fireEvent('editFeedCommand',this,record);


                        }
                    },
                    onFeedTap: function(list,index,target,record,event,options){
                        console.log('List tapped, item = ',index);
                        //debugger;
                    }
                }
            ]
        },





	});
