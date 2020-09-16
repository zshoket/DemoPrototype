Ext.define('SORISMA.store.risikoViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.risikoviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/risikos",
        headers: {
            Accept: "application/json"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true,


});
