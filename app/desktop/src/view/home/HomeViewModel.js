Ext.define('myDemoApp.view.home.HomeViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeviewmodel',
	fields: 
    [
        
        { name: "id", type: "auto", defaultValue: null },
        { name: "name", type: "string" },
        { name: "unternehmen", type: "string" },

        { name: "kurzbeschreibung", type: "auto" },

        { name: "reifegrad", type: "auto" },

        { name: "nutzenversprechen", type: "auto" },

        { name: "herausforderungen", type: "auto" },

        { name: "auswirkungenMensch", type: "auto" },
        { name: "auswirkungenOrganisation", type: "auto" },

        { name: "auswirkungenTechnik", type: "auto" }
    ]

});
