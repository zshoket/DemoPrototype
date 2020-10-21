Ext.define('SORISMA.view.dataview.dataView',{
    extend: "Ext.form.Panel",
    xtype: 'dataview',
    cls: 'dataview',
    controller: {type: "dataviewcontroller"},
    viewModel: {type: "dataviewmodel"},
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
            title: "Risiko",
            width: '60%',
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
			margin: "0 10 0 0",
			bind: {
				html: '<p style="font-size:14px">{home_riskName}</p>'
            }
        },
        {
            title: "Document",
            width: '38%',
            height: 100,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
			margin: "0 10 0 0",
			bind: {
                html: '<b style="font-size:14px">{home_riskDocument}</b>',
            }
        },
        {
            title: "Risikoursachen",
            width: '98.7%',
            height: 170,
            margin: "0 11 0 0",
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            split: true,
			bind: {
                html: 
                '<ul><li>{home_risikoUrsachen}</li></ul>'
        //'<p style="font-size:14px">{home_risikoUrsachen}</p>',
            }
        },
        {
            title: "Risikoaurswirkung",
            width: '98.5%',
            height: 170,
            split: true,
            header: {
                style: {
                    backgroundColor: '#7f7f7f'
                }
            },
            bind: {
                html: 
                '<p style="font-size:14px">{home_risikoAuswirkung}</p>'
            },
        }
    // id: 'myData',
    // rowNumbers: true,
    // columns: [
    //     {
    //         text: 'Risiko',
    //         dataIndex: 'riskName',
    //         editable: false,
    //         width: '35%',
    //         cell: {userCls: 'bold'}
    //     },
    //     {
    //         text: 'Document',
    //         dataIndex: 'riskDocument',
    //         editable: false,
    //         width: '25%'
    //     },
    //     {
    //         text: 'Risikoursachen',
    //         dataIndex: 'risikoUrsachen',
    //         editable: false,
    //         width: '25%'
    //     },{
    //         text: 'Risikoauswirkung',
    //         dataIndex: 'risikoAuswirkung',
    //         editable: false,
    //         width: '15%',
    //     }
    // ],
    //     listeners: {
                
    //         select: 'onItemSelected',
           
    //             }
    ]

});
