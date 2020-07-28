Ext.define('SORISMA.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    // # This Block is for Navigating in One View to Another with a Button Click # \\
    // It is Not Being Used Here for Now
    action: "changeView",
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
             },
    // # End Of Block # \\

    // onEditCancelled: function (editor, value, startValue, eOpts) {
    //     var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
    //     Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    // }
});
