Ext.define('SORISMA.store.risikoViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.risikoviewstore',
    model: 'SORISMA.model.Risikos',

    proxy: {
        type: "ajax", 
        url: "http://51.15.76.202:3001/api/risikos",
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
