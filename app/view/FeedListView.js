/**
 * Created by som on 02/06/2014.
 */

Ext.define('Volt.view.FeedListView',{
    extend: 'Ext.dataview.List',
    xtype: 'feedlistview',

    config:{
        loadingText : 'Loading Notes...',
        emptyText : '<div class="notes-list-empty-text">No notes found.</div>',
        onItemDisclosure: true,
        itemTpl: '<div class="list-item-title">{title}</div> <div class="list-item-narrative">{narrative}</div>'
    }



});