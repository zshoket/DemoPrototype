Ext.define('SORISMA.store.dataviewStore', {
    extend: 'Ext.data.ChainedStore',
    alias: 'store.dataviewstore',
    model: 'SORISMA.model.Risikos',
    storeId: 'chained',
    source: 'nbe1',
    
    
        autoSync:true,
        proxy: {
            type: 'ajax',
            headers: {
                Accept: "application/json"
            },
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        autoLoad: true,
        listeners:{
            beforeload:function() {
                console.log('source: beforeload');
            }
        }
        

            // getDataOfStore:  function (store){
            //     var rawData = store.getAuswirkung();
            //     var allRecords = (auswirkungviewstore.getData().getSource() || auswirkungviewstore.getData()).getRange();
            //     var myRecords = (store.getData().getSource() || store.getData()).getRange();
            // }


});

var chained1 = Ext.create('Ext.data.ChainedStore',{
    source:nbe2,
    listeners:{
        beforeload:function() {
            console.log('chained1: beforeload');
        }
    }
});

var chained2 = Ext.create('Ext.data.ChainedStore',{
    source:nbe3,
    listeners:{
        beforeload:function() {
            console.log('chained2: beforeload');
        }
    }
});