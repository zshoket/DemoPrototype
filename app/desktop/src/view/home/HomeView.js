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
            width: '80%',
            flex: 1,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
			margin: "0 10 0 0",
			bind: {
				html: '<p style="font-size:14px">{home_name}</p>'
            }
        },
        {
            title: "Dimension",
            width: '18%',
            height: 100,
            split: true,
            flex: 1,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
			margin: "0 10 0 0",
			bind: {
                html: '<b style="font-size:14px">{home_dimension}</b>',
            }
        },
        {
            title: "Kurzbeschreibung",
            width: '98.7%',
            height: 170,
            margin: "0 10 0 0",
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            split: true,
			bind: {
                html: 
                //'{home_kurzbeschreibung}',
                '<p style="font-size:14px">{home_kurzbeschreibung}</p>',
            }
        },
       /*  {
            title: "Unternehmen",
            width: 280,
            height: 170,
            margin: "0 5 0 0",
              bind: {
                 html: 
                 //'<b style="font-size:13px">{home_unternehmen}</b>',
                 '<img src="{home_unternehmen}" width="250" height="150">'
             }
         }, */
        {
            title: "Reifegrad",
            width: '19%',
            height: 170,
            margin: "0 5 0 0",
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
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
            width: '79.5%',
            height: 170,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html: 
                //'<ul><li>{home_einordnungKette}</li></ul>'
                '<p style="font-size:14px">{home_einordnungKette}</p>'
            },
        },
        {
            title: "Nutzenversprechen",
            width: '49%',
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: 
                //'<ul><li>{home_nutzenversprechen}</li></ul>'
                '<p style="font-size:14px">{home_nutzenversprechen}</p>'
			},
        },
        {
            title: "Herausforderungen",
            width: '49.2%',
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
				html: '<p style="font-size:14px">{home_herausforderungen}</p>'
			},
        },
        {
            title: "Veränderungen Mensch",
            width: '32%',
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: 
                '<p style="font-size:14px">{home_veraenderungenMensch}</p>'
			},
        },
        {
            title: "Veränderungen Organisation",
            width: '33%',
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: 
                '<p style="font-size:14px">{home_veraenderungenOrganisation}</p>'
			},
        },
        {
            title: "Veränderungen Technologie",
            width: '32.7%',
            split: true,
            height: 160,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html:
                
                '<p style="font-size:14px">{home_veraenderungenTechnologie}</p>'
			},
        }
    ]
});
