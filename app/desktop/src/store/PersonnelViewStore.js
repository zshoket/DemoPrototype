Ext.define('myDemoApp.store.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    model: 'myDemoApp.model.Usecase',

    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/documents",
        headers: {
            Accept: "application/json"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true,

    // // Testdaten
    // data: {
    //     items: [
    //         {
    //             id: 0,
    //             name: "test35443",
    //             unternehmen: "testUnternehmen",
    //             kurzbeschreibung: "testKurzbes",
    //             reifegrad: "testReifegrad",
    //             nutzenversprechen: "testnutzenversprechen",
    //             herausforderungen: "testherausforderungen",
    //             auswirkungenMensch: "testauswirkungenMensch",
    //             auswirkungenOrganisation: "testauswirkungenOrganisation",
    //             auswirkungenTechnik: "testauswirkungenTechnik"
    //         },
    //         {
    //             id: 1,
    //             name: "testtest",
    //             unternehmen: "testUnternehmentestUnternehmen",
    //             kurzbeschreibung: "testKurzbes",
    //             reifegrad: "testReifegrad",
    //             nutzenversprechen: "testnutzenversprechen",
    //             herausforderungen: "testherausforderungen",
    //             auswirkungenMensch: "testauswirkungenMensch",
    //             auswirkungenOrganisation: "testauswirkungenOrganisation",
    //             auswirkungenTechnik: "testauswirkungenTechnik"
    //         }
    //     ]
    // }

});
