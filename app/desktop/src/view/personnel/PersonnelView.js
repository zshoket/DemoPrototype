Ext.define('SORISMA.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    
    // plugins: {
    //     rowedit: {
    //         autoConfirm: false
    //     }
    // },
    columns: [
        {xtype: 'rownumberer'},
        {
            text: 'Name',
            dataIndex: 'name',
            editable: false,
            // renderer: function (rowIndex) {
            //     return '<a href="#">'+rowIndex+'</a>';
            // },
            
            width: 250,
            cell: {userCls: 'bold'},
            
        },
        {
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: 150
        },
        {
            text: 'Unternehmen',
            dataIndex: 'unternehmen_id',
            editable: false,
            width: 230
        },
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
            
            // itemclick: function(dv, record, item, index, e) {
            //     alert(record.get('name'));
            // }

            // itemclick: function(this, record, element, rowIndex, e, eOpts) {
            //     var selectedRec = this.getSelectionModel().getSelected();          
            //     alert(selectedRec.get('name'));
            // }

            // select: function(selModel, record, index, options){
            //     alert(index);
            // }
            
            // cellclick: function (view, cell, cellIndex, record, row, rowIndex, e) {
    
            //     var linkClicked = (e.target.tagName == 'A');
            //     var clickedDataIndex =
            //         view.panel.headerCt.getHeaderAtIndex(cellIndex).dataIndex;
    
            //     if (linkClicked && clickedDataIndex == '...') {
            //         alert(record.get('id'));
            //     }
            
            select : function(grid,rowIndex,e) {
                var record = grid.getStore().getAt(rowIndex);
                var id = record.get('ID');
                var url = 'http://localhost:1962/#homeview/='+id;
                window.location = url;
           }
    }

});
