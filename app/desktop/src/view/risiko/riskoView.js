Ext.define('SORISMA.view.risiko.risiko',{
    extend: 'Ext.grid.Grid',
    xtype: 'risikoview',
    cls: 'risikoview',
    controller: {type: 'risikoviewcontroller'},
    viewModel: {type: 'risikoviewmodel'},
    store: {type: 'risikoviewstore'},
    rowNumbers: true,
    columns: [
        {
            text: 'Risiko',
            dataIndex: 'name',
            editable: false,
            width: 460,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Eintrittswahrscheinlichkeit',
            dataIndex: 'eintritWahr',
            editable: false,
            width: 330
        },
        {
            text: 'Schadenshöhe',
            dataIndex: 'schadenshohe',
            editable: false,
            width: 230
        },{
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: 150
        },
        {
            text: 'Auswirkungen anzeigen',
            width: 180,
            hideable: false,
            sortable: false,
            disableSelection: true,
            menuDisabled: true,
            rowSelect: false,
            cell: {
                tools: {
                    approve: {
                    iconCls: "x-fa fa-angle-double-right",
                    handler: 'onButton'
                    }
                 }
            }
            
        }  
    ],

        listeners: {
            
           select: 'onItemSelected',
           
                }
    

});
