Ext.define('SORISMA.view.dataview.dataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataviewcontroller',

    combineStoreData: function () {
        var me = this;
        debugger
        me.getView('');
        var ursachenView = me.getView().next('ursachenview');
        var risikoView = me.getView().next('risikoview');
        var auswirkungView = me.getView().next('auswirkungview');
        
        var uStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
            return record.data;
        });
    
        var riskStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
            return record.data;
        });

        var ausStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
            return record.data;
        });
    }

});

