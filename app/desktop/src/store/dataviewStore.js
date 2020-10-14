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

        

            getJsonOfStore:  function (store){
                getData().getSource('risikoviewstore');
                var datar = new Array();
                var jsonDataEncode = "";
                var records = store.getRange();
                for (var i = 0; i < records.length; i++) {
                    datar.push(records[i].data);
                }
                jsonDataEncode = Ext.util.JSON.encode(datar);
                return jsonDataEncode;
            }


});
