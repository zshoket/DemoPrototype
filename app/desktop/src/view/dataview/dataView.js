Ext.define('SORISMA.view.dataview.dataView', {
    extend: "Ext.form.Panel",
    xtype: 'dataview',
    cls: 'dataview',
    controller: { type: "dataviewcontroller" },
    viewModel: { type: "dataviewmodel" },
    store: Ext.create("SORISMA.store.dataviewStore", {}),
    requires: [
        "SORISMA.store.dataviewStore",
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
            title: "Use Case",
            width: '98.7%',
            height: 120,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: '<b style="font-size:14px">{data_riskDocument}</b>',
            }
        },
        {
            title: "Risikoursachen",
            width: '38.7%',
            height: '50%',
            margin: "0 11 0 0",
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            split: true,
            bind: {
                html:
                    '<ul style="font-size:16px">{data_risikoUrsachen}</ul>',
                //"line-height:180%"
            }
        },
        {
            title: "Risiko",
            width: '21%',
            height: '50%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            margin: "0 10 0 0",
            bind: {
                html: '<p style="font-size:16px">{data_riskName}</p>'
            }
        },
        {
            title: "Risikoauswirkungen",
            width: '38%',
            height: '50%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html:
                    '<ul style="font-size:16px">{data_risikoAuswirkung}</ul>',
            },
        }
    ]

});
