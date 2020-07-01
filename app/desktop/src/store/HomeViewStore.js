Ext.define('SORISMA.store.HomeViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.homeviewstore',
    model: 'SORISMA.model.Usecase',
    
    proxy: {
        type: "ajax", 
        
        url: "http://localhost:3002/getAll",
       // url: "http://localhost:3001/api/documents",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});