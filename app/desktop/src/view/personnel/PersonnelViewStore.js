Ext.define('myDemoApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
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
