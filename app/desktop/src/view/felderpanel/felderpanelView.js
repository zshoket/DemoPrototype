
Ext.define('SORISMA.view.felderpanel.felderpanelView', {
    extend: 'Ext.panel.Panel',
    xtype: 'felderpanelview',
    requires: [
        'SORISMA.view.felderpanel.felderpanelViewController',
        'SORISMA.view.felderpanel.felderpanelViewModel',
        "SORISMA.store.risikofelderViewStore",
        "Ext.form.FieldSet",
        "Ext.form.Checkbox",
        "Ext.form.field.*",
        "Ext.Img",
        "Ext.layout.VBox"
    ],
    store: Ext.create("SORISMA.store.risikofelderViewStore", {}),
    controller: { type: "felderpanelviewcontroller" },
    viewModel: {
        type: 'felderpanelviewmodel'
    },
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
            title: "Risikorisikofelder",
            width: '98%',
            height: '18%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: '<b style="font-size:14px">{data_felderName}</b>',
            }
        },
        {
            title: "Kurzbeschreibung",
            width: '38%',
            height: '40%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_kurzbeschreibung}</ul>',
            },
            items: [
                {
                    xtype: 'panel',
                    title: "Veränderte Bedeutung des Risikofelds durch Industrie 4.0",
                    width: '95%',
                    height: 120,
                    split: true,
                    header: {
                        style: {
                            backgroundColor: '#7f7f7f'
                        }
                    },
                    margin: "0 10 0 0",
                    bind: {
                        html: '<p style="font-size:16px">{data_riskLevel}</p>'
                    }
                }
            ]
        },
        {
            title: "Einordnung des Risikofelds",
            width: '60%',
            height: '40%',
            layout: {
                type: "float"
            },
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            items: [
                {
                    xtype: 'panel',
                    title: "Soziotechnische Dimension",
                    width: '49%',
                    height: 120,
                    split: true,
                    flex: 1,
                    header: {
                        style: {
                            backgroundColor: '#7f7f7f'
                        }
                    },
                    margin: "0 10 0 0",
                    bind: {
                        html: '<b style="font-size:14px">{data_dimension}</b>',
                    }
                },
                {
                    xtype: 'panel',
                    title: "Stoßrichtung der Digitalisierung",
                    width: '45%',
                    height: 120,
                    margin: "0 11 0 0",
                    header: {
                        style: {
                            backgroundColor: '#7f7f7f'
                        }
                    },
                    split: true,
                    bind: {
                        html:
                            '<ul style="font-size:16px">{data_stossrichtung}</ul>',

                    }
                }
            ]
        },
        {
            title: "Charakteristische Risikoursachen",
            width: '33%',
            height: '25%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_charRisikoursachen}</ul>',
            },
        },
        {
            title: "Charakteristische Risiken",
            width: '33%',
            height: '25%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_charRisiken}</ul>',
            },
        },
        {
            title: "Charakteristische Risikoauswirkungen",
            width: '32%',
            height: '25%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_charRisikoauswirkungen}</ul>',
            },
        },

    ]

});







