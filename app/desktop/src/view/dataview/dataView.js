Ext.define('SORISMA.view.dataview.dataView',{
    extend: 'Ext.grid.Grid',
    xtype: 'dataview',
    cls: 'dataview',
    controller: {type: 'dataviewcontroller'},
    viewModel: {type: 'dataviewmodel'},
    store: {type: 'dataviewstore'},
    rowNumbers: true,
    columns: [
        {
            text: 'Risiko',
            dataIndex: 'name',
            editable: false,
            width: '35%',
            cell: {userCls: 'bold'}
        },
        {
            text: 'Risikoursachen',
            dataIndex: 'eintritWahr',
            editable: false,
            width: '25%'
        },
        {
            text: 'Risikoauswirkung',
            dataIndex: 'schadenshohe',
            editable: false,
            width: '25%'
        },{
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: '15%',
        }
    ],
        listeners: {
                
            select: 'onItemSelected',
           
                }
    

});
