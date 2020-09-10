Ext.define('SORISMA.view.dataexplorer.dataExplorer',{
    extend: 'Ext.grid.Grid',
    xtype: 'dataexplorerview',
    cls: 'dataExplorerview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'dataexplorerviewcontroller'},
    viewModel: {type: 'dataexplorerviewmodel'},
    store: {type: 'dataexplorerviewstore'},
    rowNumbers: true,
     plugins: {
         rowedit: {
             autoConfirm: false
         }
     },
    columns: [
        {
            text: 'Document',
            dataIndex: 'documentsID',
            editable: false, 
            width: 350,
            cell: {userCls: 'bold'},
            
        },
        {
            text: 'Risikoursachen',
            dataIndex: 'name',
            editable: false,
            width: 350
        },
        {
            text: 'Risiko',
            dataIndex: 'name',
            editable: false,
            width: 330
        },
        {
            text: 'Risikoauswirkung',
            dataIndex: 'name',
            editable: false,
            width: 330
        }
    ],

        listeners: {
            
           select: 'onItemSelected',
           
                }
    

});
