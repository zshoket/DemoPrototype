Ext.define('SORISMA.view.dataview.dataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataviewcontroller',

    init: function(view) {
		var me = this;
		me.reloadData();
	},

	reloadData: function() {
        var me = this;
        debugger
		var view = me.getView();
		var mainVM = Ext.getCmp('mainview').getViewModel();
		var activeID = mainVM.get('main_activeID');
		var record = view.store.getAt(activeID);
		if (record) {
			var data = record.getData();
			var vm = me.getViewModel();
			vm.set('home_riskName', data.riskName)
			vm.set('home_riskDocument', data.riskDocument)
			vm.set('home_risikoUrsachen', data.risikoUrsachen)
			vm.set('home_risikoAuswirkung', data.risikoAuswirkung)
		}
	},

    // combineStoreData: function () {
    //     var me = this;
    //     debugger
    //     me.getView('');
    //     var ursachenView = me.getView().next('ursachenview');
    //     var risikoView = me.getView().next('risikoview');
    //     var auswirkungView = me.getView().next('auswirkungview');
        
    //     var uStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
    //         return record.data;
    //     });
    
    //     var riskStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
    //         return record.data;
    //     });

    //     var ausStoreArray = Ext.Array.map(ursachenView.getStore().getData().getSource(), function (record) {
    //         return record.data;
    //     });
    // }

});

