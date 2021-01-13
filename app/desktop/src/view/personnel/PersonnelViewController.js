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
          },

            onApprove: function (grid, info) {
            var myId = info.record.get('id');
            var url1 = "http://51.15.76.202:3001/api/documents/" + myId + "/risikos";  
                const getJSON = async url => {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) 
                            throw new Error(response.statusText);

                        const data = await response.json(); 
                        return data; 
                    } catch (error) {
                        return error;
                    }
                }
                getJSON(url1).then(data => {
                    if (data.length == 0){
                        Ext.Msg.alert('Kein Risiko gefunden');
                    } else
                    {
                        window.location = url1;
                    }
                }).catch(error => {
                    console.error(error);
                });
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
