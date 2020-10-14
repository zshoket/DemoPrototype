Ext.define('SORISMA.store.ursachenViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ursachenviewstore',
    model: 'SORISMA.model.Risikos',

    proxy: {
        type: "ajax", 
        url: "http://51.15.76.202:3001/api/risikoursachens/",
        // url: 
        // "http://51.15.76.202:3001/api/risikos/"+id+"/risikoursachens",
   // "http://51.15.76.202:3001/api/risikoursachens/"+id+"/risikos",

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
