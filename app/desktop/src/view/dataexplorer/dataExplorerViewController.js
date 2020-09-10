Ext.define('SORISMA.view.dataexplorer.dataExplorerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataexplorerviewcontroller',


             refs: {
                HomeView: {
                    autoCreate: true,
                    selector: '#homeview',
                    xtype: 'homeview',
                }
            },
             
        onItemSelected: function(grid,records,e) {

          
            var record = records[0];
            var id = record.get('id');
            if (id == '5ece3143a7f3956194cb74e9') {
                this.redirectTo('#homeview/0');
              } 
              else
              {
                alert("Does not exists");
              }
         
        }
 
});

    