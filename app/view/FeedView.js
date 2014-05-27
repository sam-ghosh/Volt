/**
 * Created by som on 24/05/2014.
 */

	Ext.define('Volt.view.FeedView', {
	    extend: 'Ext.Panel',
	
	    requires: [
	        'Ext.TitleBar',
	        'Ext.Button',
	        'Ext.Toolbar',
	        //'Ext.Panel'
	    ],
	
	    xtype: 'feedViewCard',
	    
	
	    config: {
	        
	    	iconCls: 'action',
	        title: 'FeedView',
	    
			layout: 
	    	{
	    		type: 'vbox'
	    	},
	    		
	    	items : [
						{
							xtype : 'toolbar',
							title : 'FeedView',
							docked : 'top'
						},
						{
							xtype : 'container',
							style: 'background: red',
							html: 'New1',
							
							flex: 1
		
							// Mask this item when the
							// container is opened
							//maskOnOpen : true
						},
						{
							xtype : 'container',
							style: 'background: green',
							html: 'New2',
							flex: 1
		
							// Mask this item when the
							// container is opened
							//maskOnOpen : true
						} 
					
					]
	    }
	});
