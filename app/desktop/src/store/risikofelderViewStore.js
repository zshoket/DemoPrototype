Ext.define('SORISMA.store.risikofelderViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.risikofelderviewstore',
    model: 'SORISMA.model.Risikos',

    proxy: {
        type: "ajax",
        url: "http://localhost:3001/api/risikoFelders",
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
