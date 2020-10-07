Ext.define('SORISMA.view.ursachen.ursachenViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ursachenviewcontroller',
         
    onMyClick: function(grid, info) {
        var myId = info.record.get('id');
        var url = "http://localhost:3001/api/risikoursachens/"+myId+"/risikos";
        if (url.Response == []) {
           Ext.Msg.alert('No Risks Found');
        }else {
          window.location = url;
         }
    
    },
});

    