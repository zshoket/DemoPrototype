Ext.define('SORISMA.store.auswirkungViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.auswirkungviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/risikoauswirkungs",
        
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
