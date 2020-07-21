Ext.define('SORISMA.store.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
      //  url: "http://localhost:3002/getAll",
        url: "http://localhost:3001/api/documents",
    // url: "http://localhost:9000/getAll/",
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
