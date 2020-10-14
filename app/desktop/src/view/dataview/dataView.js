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
            width: 250,
            cell: {userCls: 'bold'},
            
        },
        {
            text: 'Risikoursachen',
            dataIndex: 'dimension',
            editable: false,
            width: 250
        },
        {
            text: 'Risikoauswirkung',
            dataIndex: 'einordnungKette',
            editable: false,
            width: 230
        },
        {
            text: 'Dimension',
            dataIndex: 'kurzbeschreibung',
            editable: false,
            width: 230
        },
        {
            text: 'Document',
            dataIndex: 'reifegrad',
            editable: false,
            width: 230,
        },
    ],
        listeners: {
                
            select: 'onItemSelected',
           
                }
    

});
