Ext.define('myDemoApp.store.HomeViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.homeviewstore',
    model: 'myDemoApp.model.Usecase',
    
    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/documents",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});