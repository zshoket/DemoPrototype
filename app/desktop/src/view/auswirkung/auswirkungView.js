Ext.define('SORISMA.view.auswirkung.auswirkung',{
    extend: 'Ext.grid.Grid',
    xtype: 'auswirkungview',
    cls: 'auswirkungview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'auswirkungviewcontroller'},
    viewModel: {type: 'auswirkungviewmodel'},
    store: {type: 'auswirkungviewstore'},
    rowNumbers: true,
     plugins: {
         rowedit: {
             autoConfirm: false
         }
     },
    columns: [
        {
            text: 'Risikoauswirkung',
            dataIndex: 'name',
            editable: false,
            width: 460,
            cell: {userCls: 'bold'}
        }
    ],

        listeners: {
            
           select: 'onItemSelected',
           
                }
    

});
