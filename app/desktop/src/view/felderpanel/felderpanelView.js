
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
                html: '<h1 style="text-align:center">{data_felderName}</h1>',
            }
        },
        {
            title: "Kurzbeschreibung",
            width: '38%',
            height: '45%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_kurzbeschreibung}</ul>',
            }

        },

        {
            title: "Einordnung des Risikofelds",
            width: '60%',
            height: '45%',
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
                    height: 180,
                    split: true,
                    border: true,
                    style: {
                        border: '.5px solid grey'
                    },
                    flex: 1,
                    header: {
                        style: {
                            backgroundColor: '#7f7f7f'
                        }
                    },
                    margin: "0 10 0 0",
                    bind: {
                        html: '<ul style="font-size:16px">{data_dimension}</ul>',
                    }
                },
                {
                    xtype: 'panel',
                    title: "Stoßrichtung der Digitalisierung",
                    width: '45%',
                    height: 180,
                    margin: "0 11 0 0",
                    border: true,
                    style: {
                        border: '.5px solid grey'
                    },
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
                },
                {
                    xtype: 'panel',
                    title: "Veränderte Bedeutung des Risikofelds durch Industrie 4.0",
                    width: '95.3%',
                    height: 140,
                    split: true,
                    border: true,
                    style: {
                        border: '.5px solid grey'
                    },
                    header: {
                        style: {
                            backgroundColor: '#7f7f7f'
                        }
                    },
                    margin: "0 10 0 0",
                    bind: {
                        html: '<p style="font-size:16px">{data_riskLevel}</p>'
                    }
                },
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







