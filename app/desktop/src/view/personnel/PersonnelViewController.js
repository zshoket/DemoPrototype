Ext.define('SORISMA.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',


             refs: {
                HomeView: {
                    autoCreate: true,
                    selector: '#homeview',
                    xtype: 'homeview',
                }
            },
             
            onItemSelected: function (grid, records, e) {

              var selectedRecord = grid.getSelection();
              var row = grid.store.indexOf(selectedRecord);
              if (row == 0) {
                  this.redirectTo('#homeview/0');
              } else {
                  this.redirectTo('#homeview/' + row);
              }
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
