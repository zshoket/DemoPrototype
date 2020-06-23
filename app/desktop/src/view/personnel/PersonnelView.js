Ext.define('SORISMA.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: true,
            width: 230
        },
        {
            text: 'Unternehmen',
            dataIndex: 'unternehmen',
            editable: true,
            width: 230
        },
        {
            text: 'Einordnung in die Wertschöpfungs-kette',
            dataIndex: 'einordnungKette',
            editable: true,
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
            width: 230
        },
        {
            text: 'Nutzenversprechen',
            dataIndex: 'nutzenversprechen',
            editable: false,
            width: 230
        },
        {
            text: 'veraenderungen Mensch',
            dataIndex: 'veraenderungenMensch',
            editable: false,
            width: 230
        },
        {
            text: 'veraenderungen Organisation',
            dataIndex: 'veraenderungenOrganisation',
            editable: false,
            width: 230
        },
        {
            text: 'veraenderungen Technologie',
            dataIndex: 'veraenderungenTechnologie',
            editable: false,
            width: 230
        }        
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
