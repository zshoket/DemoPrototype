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
     /*    {
            xtype: "searchfield",
            label: "Search",
            name: "search"
        }, */
        {
            title: "Name",
            width: '950',
            flex: 1,
			margin: "0 10 0 0",
			bind: {
				html: '<p style="font-size:13px">{home_name}</p>'
            }
        },
        {
            title: "Dimension",
            width: '175',
            flex: 1,
			margin: "0 10 0 0",
			bind: {
                html: '<b style="font-size:13px">{home_dimension}</b>',
            }
        },
        {
            title: "Kurzbeschreibung",
            width: 850,
			margin: "0 10 0 0",
			bind: {
                html: '{home_kurzbeschreibung}',
            }
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
/*                     listeners: {
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
                        }, */
                    columns: 1,
                    items: [
                        {
                            boxLabel: "Basis-Lösung",
                            name: "cb-col-1",
                        },
                        { boxLabel: "Schlüssel-Lösung", name: "cb-col-2" },
                        { boxLabel: "Schrittmacher-Lösung", name: "cb-col-3",checked: true }
                    ]
                }
            ]
        },
        {
            title: "Einordnung in die Wertschöpfungskette",
            width: 847,
            height: 170,
            bind: {
                html: 
                //'<ul><li>Unternehmensinfrastruktur</li><li>Personalmanagement</li><li>Forschung und Entwicklung</li><li>Beschaffung</li><li>Fertigung</li><li>Marketing & Vertrieb</li><li>Logistik</li><li>Service</li></ul>'
                '<ul><li>{home_einordnungKette}</li></ul>'
            },
        },
        {
            title: "Nutzenversprechen",
            width: 560,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '<ul><li>{home_nutzenversprechen}</li></ul>'
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
            title: "Veränderungen Mensch",
            width: 390,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_veraenderungenMensch}'
			},
        },
        {
            title: "Veränderungen Organisation",
            width: 350,
            height: 160,
            margin: "0 10 0 0",
            bind: {
				html: '{home_veraenderungenOrganisation}'
			},
        },
        {
            title: "Veränderungen Technologie",
            width: 380,
            height: 160,
            margin: "0 10 0 0",
            bind: {
                html:
                '{home_veraenderungenTechnologie}'
                //'<script String numbersArray = "{home_veraenderungenTechnologie}"; List<String> numbers = Arrays.asList(numbersArray.split(",")); >'
                //'<body><script>String a = "{home_veraenderungenTechnologie}";String b = a.split(",");console.log(b);String[] myString = Arrays.asList(b);</script></body>'
			},
        }
    ]
});
