Ext.define('SORISMA.store.ursachenViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ursachenviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/risikoursachens",
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
