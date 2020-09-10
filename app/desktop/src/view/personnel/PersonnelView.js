Ext.define('SORISMA.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    rowNumbers: true,
    // plugins: {
    //     rowedit: {
    //         autoConfirm: false
    //     }
    // },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: false, 
            width: 250,
            cell: {userCls: 'bold'},
            
        },
        {
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: 150
        },
       /*  {
            text: 'Unternehmen',
            dataIndex: 'unternehmen_id',
            editable: false,
            width: 230
        }, */
        {
            text: 'Einordnung in die Wertschöpfungs-kette',
            dataIndex: 'einordnungKette',
            editable: false,
            width: 230
        },
        {
            text: 'Kurzbeschreibung',
            dataIndex: 'kurzbeschreibung',
            editable: false,
            width: 230
        },
        {
            text: 'Reifegrad',
            dataIndex: 'reifegrad',
            editable: false,
            width: 230,
        },
        {
            text: 'Nutzenversprechen',
            dataIndex: 'nutzenversprechen',
            editable: false,
            width: 230
        },
        {
            text: 'Veränderungen Mensch',
            dataIndex: 'veraenderungenMensch',
            editable: false,
            width: 230
        },
        {
            text: 'Veränderungen Organisation',
            dataIndex: 'veraenderungenOrganisation',
            editable: false,
            width: 230
        },
        {
            text: 'Veränderungen Technologie',
            dataIndex: 'veraenderungenTechnologie',
            editable: false,
            width: 230
        }   
    ],

        listeners: {
            
           select: 'onItemSelected',
           
                }
    

});
