Ext.define('myDemoApp.view.home.HomeViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.homeviewstore',
    fields: [
        'name', 'unternehmen','reifegrad','nutzenversprechen','auswirkungenMensch','auswirkungenOrganisation','auswirkungenTechnik'
    ],
    

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