Ext.define("SORISMA.view.home.HomeView", {
    xtype: "homeview",
	extend: "Ext.form.Panel",
	id: 'homeview',
    cls: "homeview",
    controller: { type: "homeviewcontroller" },
    viewModel: { type: "homeviewmodel" },
    store: Ext.create("SORISMA.store.HomeViewStore", {}), // ein Store ist in einem Panel nicht vergesehen
    requires: [
        "SORISMA.store.HomeViewStore",
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
        },
        {
            title: "Kurzbeschreibung",
            width: 850,
			margin: "0 10 0 0",
			bind: {
				html: '{home_kurzbeschreibung}'
			},
        },
        {
            title: "Unternehmen",
            width: 280,
            height: 170,
            margin: "0 5 0 0",
             bind: {
                 html: '<img src="{home_unternehmen}" alt="mit" width="250" height="150">'
             }
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
                    listeners: {
                        change: function (field, newValue, oldValue) {
                            var group = field.up('checkboxgroup');

                            if (field.name == 'Basis-Lösung') {
                                group.doCheckUnCheckAll(newValue);
                            } else {
                                var len = group.query('[name=mycheck]').length,
                                    allCB = group.down('[name=all]');

                                if (newValue) {
                                    group.checkedArr.push(field.inputValue)
                                } else {
                                    Ext.Array.remove(group.checkedArr, field.inputValue);
                                }
                                group.doSetCBValue(allCB, len == group.checkedArr.length);
                            }     
                },

                            doSetCBValue: function (f, v) {
                                //Check or uncheck
                                f.suspendEvent('change');
                                f.setValue(v);
                                f.resumeEvent('change');
                            },
                        },
                        doCheckUnCheckAll: function (isCheck) {
                            this.query('[name=mycheck]').forEach(f => {
                                this.doSetCBValue(f, isCheck);
                                //For checking to other checkbox is checked or not
                                if (isCheck) {
                                    if (this.checkedArr.indexOf(f.inputValue) == -1)
                                        this.checkedArr.push(f.inputValue);
                                } else {
                                    Ext.Array.remove(this.checkedArr, f.inputValue);
                                }
                            });
                        },
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
            bind: {
				html: '{home_nutzenversprechen}'
			},
        },
        {
            title: "Herausforderungen",
            width: 571,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_herausforderungen}'
			},
        },
        {
            title: "Auswirkungen Mensch",
            width: 390,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_auswirkungenMensch}'
			},
        },
        {
            title: "Auswirkungen Organisation",
            width: 350,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_auswirkungenOrganisation}'
			},
        },
        {
            title: "Auswirkungen Technik",
            width: 380,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_auswirkungenTechnik}'
			},
        }
    ]
});
