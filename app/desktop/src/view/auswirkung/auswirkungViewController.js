Ext.define('SORISMA.view.auswirkung.auswirkungViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auswirkungviewcontroller',

    popUpGrid: function (grid, info) {
        Ext.create('Ext.window.Window', {
            title: 'Gefilterte Liste',
            height: 400,
            // width: 400,
            layout: 'fit',
            closeable: false,
            bbar: [
                {
                    text: 'Close',
                    handler: function () { this.up('window').close(); }
                }
            ],
            autoShow: true,
            items: {
                xtype: 'grid',
                border: true,
                columns: [
                    {
                        text: 'Risk Name',
                        editable: false,
                        width: 250,
                        cell: { userCls: 'bold' },

                    },
                    {
                        text: 'Dimension',
                        editable: false,
                        width: 150
                    },
                ],
                store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
            }
        }).show();


    }
});

