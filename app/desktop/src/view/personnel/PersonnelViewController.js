Ext.define('SORISMA.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    // # This Block is for Navigating in One View to Another with a Button Click # \\
    // It is Not Being Used Here for Now
    /* action: "changeView",
    refs: {
        HomeView: {
            autoCreate: true,
            selector: '#homeview',
            xtype: 'homeview',
        },
    
    },

    control: {
        'button[action=changeView]' : {
           tap: 'changeView'
       }
  
  },

        changeView: function(){
            this.redirectTo('homeview');
             }, */

             refs: {
                HomeView: {
                    autoCreate: true,
                    selector: '#homeview',
                    xtype: 'homeview',
                },
            
            },
             
        onItemSelected: function(grid,records,e) {

            debugger
            var record = records[0];
            var id = record.get('id');
            var url = 'http://51.15.76.202:3001/api/documents/'+id;
            //var url =  'http://localhost:1962/#homeview/12';
            window.location = url;
        }


 
});
