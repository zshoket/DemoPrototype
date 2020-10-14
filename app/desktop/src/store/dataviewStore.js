Ext.define('SORISMA.store.dataviewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataviewstore',
    model: 'SORISMA.model.Risikos',

        
        autoSync:true,
        proxy: {
            type: 'memory',
            headers: {
                Accept: "application/json"
            },
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        autoLoad: true,

        

            getDataOfStore:  function (store){
                var rawData = store.getAuswirkung();
                var allRecords = (auswirkungviewstore.getData().getSource() || auswirkungviewstore.getData()).getRange();
                var myRecords = (store.getData().getSource() || store.getData()).getRange();
            }


});
