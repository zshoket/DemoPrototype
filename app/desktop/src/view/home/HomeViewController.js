Ext.define('SORISMA.view.home.HomeViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.homeviewcontroller',

	init: function(view) {
		var me = this;

		me.reloadData();
	},

	/**
	 * Setzt die Daten des Eintrags in die ViewModel Variablen.
	 * Greift auf die `main_activeID` Variable aus dem mainViewModel 
	 * zu.
	 */
	reloadData: function() {
		var me = this;
		
		var view = me.getView();
		var mainVM = Ext.getCmp('mainview').getViewModel();
		var activeID = mainVM.get('main_activeID');
		var record = view.store.getAt(activeID);
		if (record) {
			var data = record.getData();
			
			var vm = me.getViewModel();
			vm.set('home_id', data.id)
			vm.set('home_name', data.name)
			vm.set('home_unternehmen', data.unternehmen)
			vm.set('home_kurzbeschreibung', data.kurzbeschreibung)
			vm.set('home_reifegrad', data.reifegrad)
			vm.set('home_nutzenversprechen', data.nutzenversprechen)
			vm.set('home_herausforderungen', data.herausforderungen)
			vm.set('home_auswirkungenMensch', data.auswirkungenMensch)
			vm.set('home_auswirkungenOrganisation', data.auswirkungenOrganisation)
			vm.set('home_auswirkungenTechnik', data.auswirkungenTechnik)
		}
	}
});


