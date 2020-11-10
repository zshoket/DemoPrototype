Ext.define('SORISMA.view.risiko.risikoViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.risikoviewcontroller',

  refs: {
    dataview: {
      autoCreate: true,
      selector: '#dataview',
      xtype: 'dataview',
    }
  },


  onItemSelected: function (grid, records, e) {

    var selectedRecord = grid.getSelection();
    var row = grid.store.indexOf(selectedRecord);
    if (row == 0) {
      this.redirectTo('#dataview/0');
    } else if (row > 40) {
      Ext.Msg.alert('Keine Risiko Datei gefunden');
    }
    else {
      this.redirectTo('#dataview/' + row);
    }
  }


  // onButton: function (grid, info) {
  //   var newId = info.record.get('id');
  //   var url = "http://localhost:3001/api/risikos/" + newId + "/risikoFelders"
  //   if (url == []) {
  //     Ext.Msg.alert('No Riskscause Found');
  //   } else {
  //     window.location = url;
  //   }
  // },

});

