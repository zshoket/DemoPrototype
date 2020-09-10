Ext.define('SORISMA.store.dataExplorerViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataexplorerviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
      //  url: "http://localhost:3002/getAll",
    url: "http://localhost:3001/api/risikos/5f1edb951b022e3f9003f13e/risikoauswirkungs?filter[where][documentsId]=5ed53552b17d4786e8d935c5",
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
