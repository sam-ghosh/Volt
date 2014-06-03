/**
 * Created by som on 03/06/2014.
 */

    Ext.define("Volt.model.Feed", {
        extend: "Ext.data.Model",
        config: {
            idProperty: 'id',
            fields: [
                { name: 'id', type: 'int' },
                { name: 'dateCreated', type: 'date', dateFormat: 'c' },
                { name: 'title', type: 'string' },
                { name: 'narrative', type: 'string' }
            ],
            validations: [
                { type: 'presence', field: 'id'},
                { type: 'presence', field: 'dateCreated'},
                { type: 'presence', field: 'title', 'message': 'Enter a valid title'}

            ]
        }
    });
