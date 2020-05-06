Ext.define("myDemoApp.view.home.HomeView", {
    xtype: "homeview",
	extend: "Ext.form.Panel",
	id: 'homeview',
    cls: "homeview",
    controller: { type: "homeviewcontroller" },
    viewModel: { type: "homeviewmodel" },
    store: Ext.create("myDemoApp.store.HomeViewStore", {}), // ein Store ist in einem Panel nicht vergesehen
    requires: [
        "myDemoApp.store.HomeViewStore",
        "Ext.form.FieldSet",
        "Ext.form.Checkbox",
        "Ext.form.field.*",
        "Ext.Img",
        "Ext.layout.VBox"
    ],
    scrollable: true,

    defaultType: "panel",

    layout: {
        type: "float"
    },

    defaults: {
        bodyPadding: 10,
        border: true
    },

    items: [
        {
            xtype: "searchfield",
            label: "Search",
            name: "search"
        },
        {
            title: "Name",
            width: 1140,
			margin: "0 10 0 0",
			bind: {
				html: '{home_name}'
			},
            // html:
            //     "Einführung von einem Lagerwaltungssystem (LVS) und mobilen Devices"
        },
        {
            title: "Kurzbeschreibung",
            width: 850,
			margin: "0 10 0 0",
			bind: {
				html: '{home_kurzbeschreibung}'
			},
            // html:
            //     "<ul><li>Einführung von papierloser Kommissionierung/innerbetrieblicher Logistik</li><li>Einführung neuer Lagerstrategien (Verdichtung etc.)</li><li>Erfassung von qualitätsrelevanten Daten (Sendung fotografieren, Ladesicherung)</li></ul>"
        },
        {
            title: "Unternehman",
            width: 280,
            height: 170,
            margin: "0 5 0 0",
            items: [
                {
                    xtype: "image",
                    width: 300,
                    height: 150,
                    src:
                        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/mit_grayred.png"
                }
            ]
        },
        {
            title: "Reifegrad",
            width: 290,
            height: 170,
            margin: "0 5 0 0",
            items: [
                {
                    xtype: "checkboxgroup",
                    width: 300,
                    cls: "x-check-group-alt",
                    horizontal: true,
                    columns: 1,
                    items: [
                        {
                            boxLabel: "Basis-Lösung",
                            name: "cb-col-1",
                            checked: true
                        },
                        { boxLabel: "Schlüssel-Lösung", name: "cb-col-2" },
                        { boxLabel: "Schrittmacher-Lösung", name: "cb-col-3" }
                    ]
                }
            ]
        },
        {
            title: "Skizze und Einordnung in individuelle Wertschöpfungskette",
            width: 847,
            items: [
                {
                    xtype: "image",
                    height: 101,
                    width: 800,
                    src: "https://i.ibb.co/4gGNxVY/img01.png"
                }
            ]
        },
        {
            title: "Nutzenversprechen",
            width: 560,
            height: 160,
            margin: "0 10 0 0",
            html:
                "<ul><li>Höhere Transparenz der Materialflüsse</li><li>Höhere Flexibilität der Prozess</li>"
        },
        {
            title: "Herausforderungen",
            width: 571,
            height: 160,
            margin: "0 10 0 0",
            html:
                "<ul><li>Hohes Investment (IT, Software, Devices)</li><li>Mitarbeiter Knowhow</li><li>Prozessanpassung</li><li>Datennutzung?</li>"
        },
        {
            title: "Auswirkungen Mensch",
            width: 390,
            height: 160,
            margin: "0 10 0 0",
            html:
                "<li>+ Arbeitserleichterung</li><li>+ planbare Arbeitsschritte</li><li>- Neuer Arbeitsalltag</li><li>- Transparenz des Mitarbeiters (Leistungsfähigkeit)</li>"
        },
        {
            title: "Auswirkungen Organisation",
            width: 350,
            height: 160,
            margin: "0 10 0 0",
            html:
                "<li>Prozesse digital abgebildet</li><li>Weniger persönlicher Kontakt (informeller Austausch geht zurück / fehlt)</li>"
        },
        {
            title: "Auswirkungen Technik",
            width: 380,
            height: 160,
            margin: "0 10 0 0",
            html: "<li>Mehr und aufwendigere Technik</li>"
        }
    ]
});
