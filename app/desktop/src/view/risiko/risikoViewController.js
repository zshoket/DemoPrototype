Ext.define('SORISMA.view.risiko.risikoViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.risikoviewcontroller',



            onButton: function(grid, info) {
                var newId = info.record.get('id');
                var url = "http://localhost:3001/api/risikos/"+newId+"/risikoauswirkungs";
                if (url == []) {
                   Ext.Msg.alert('No Riskscause Found');
                }else {
                  window.location = url;
                 }
                },
             
         onItemSelected: function(grid,records,e) {
             var record = records[0];
             var id = record.get('id');
             var url = "http://localhost:3001/api/risikos/"+id+"/risikoursachens";
            // this.redirectTo('#ursachenview');
            window.location = url;
         }
 
});

    