Ext.define('SORISMA.view.risiko.risikoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.risikoviewcontroller',


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
            // window.location.href = "http://localhost:3001/api/risikos/"+id+"/risikoursachens";
             var url = "http://localhost:3001/api/risikos/"+id+"/risikoursachens";
            // this.redirectTo('#ursachenview');
            window.location = url;
         }
 
});

    