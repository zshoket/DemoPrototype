Ext.define('SORISMA.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',


             refs: {
                HomeView: {
                    autoCreate: true,
                    selector: '#homeview',
                    xtype: 'homeview',
                },
                init: function(view) {
                    var me = this;
            
                    me.reloadData();
                }
            },
             
        onItemSelected: function(grid,records,e) {

            debugger
            var record = records[0];
            var id = record.get('id');
            //var url = 'http://51.15.76.202:3001/api/documents/'+id; //Request aus API
           // var url =  'http://localhost:1962/#homeview/'+id;  //Request aus FrontEnd
           this.redirectTo('#homeview/'+id); // was wir brauchen
           // window.location = url;
        }
 
});

    // # This Block is for Navigating in One View to Another with a Button Click # \\
    // !**It is Not Being Used Here for Now!
    
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
