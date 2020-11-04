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

  /*  onButton: function(grid, info) {
       var newId = info.record.get('id');
       var url = "http://51.15.76.202:3001/api/risikos/"+newId+"/risikoauswirkungs";
       if (url == []) {
          Ext.Msg.alert('No Riskscause Found');
       }else {
         window.location = url;
        }
       }, */

  onItemSelected: function (grid, records, e) {
    var record = records[0];
    var id = record.get('id');
    if (id == '5efdeedbd736da481851a673') {
      this.redirectTo('#dataview/0');
    } else if (id == '5efdf05fd736da481851a674') {
      this.redirectTo('#dataview/1');
    }
    else if (id == '5efdf05fd736da481851a675') {
      this.redirectTo('#dataview/2');
    }
    else if (id == '5efdf08fd736da481851a676') {
      this.redirectTo('#dataview/3');
    }
    else if (id == '5efdf08fd736da481851a677') {
      this.redirectTo('#dataview/4');
    }
    else if (id == '5efdf08fd736da481851a678') {
      this.redirectTo('#dataview/5');
    }
    else if (id == '5efdf08fd736da481851a679') {
      this.redirectTo('#dataview/6');
    }
    else if (id == '5efdf500ab618133e05b99c5') {
      this.redirectTo('#dataview/7');
    }
    else if (id == '5efdf500ab618133e05b99c6') {
      this.redirectTo('#dataview/8');
    }
    else if (id == '5efdf500ab618133e05b99c7') {
      this.redirectTo('#dataview/9');
    }
    else if (id == '5efdf500ab618133e05b99c8') {
      this.redirectTo('#dataview/10');
    }
    else if (id == '5efdf500ab618133e05b99c9') {
      this.redirectTo('#dataview/11');
    }
    else if (id == '5efdf500ab618133e05b99ca') {
      this.redirectTo('#dataview/12');
    }
    else if (id == '5efdf500ab618133e05b99cb') {
      this.redirectTo('#dataview/13');
    }
    else if (id == '5efdf500ab618133e05b99cc') {
      this.redirectTo('#dataview/40');
    }
    else if (id == '5efdf500ab618133e05b99cd') {
      this.redirectTo('#dataview/14');
    }
    else if (id == '5efdf500ab618133e05b99ce') {
      this.redirectTo('#dataview/15');
    }
    else if (id == '5f1ed8471b022e3f9003f133') {
      this.redirectTo('#dataview/16');
    }
    else if (id == '5f1ed8471b022e3f9003f134') {
      this.redirectTo('#dataview/17');
    }
    else if (id == '5f1ed8471b022e3f9003f135') {
      this.redirectTo('#dataview/18');
    }
    else if (id == '5f1ed8471b022e3f9003f136') {
      this.redirectTo('#dataview/19');
    }
    else if (id == '5f1ed8471b022e3f9003f137') {
      this.redirectTo('#dataview/20');
    }
    else if (id == '5f1ed8471b022e3f9003f138') {
      this.redirectTo('#dataview/21');
    }
    else if (id == '5f1ed8471b022e3f9003f139') {
      this.redirectTo('#dataview/22');
    }
    else if (id == '5f1ed8471b022e3f9003f13a') {
      this.redirectTo('#dataview/23');
    }
    else if (id == '5f1ed8471b022e3f9003f13b') {
      this.redirectTo('#dataview/24');
    }
    else if (id == '5f1ed8471b022e3f9003f13c') {
      this.redirectTo('#dataview/25');
    }
    else if (id == '5f1ed8471b022e3f9003f13d') {
      this.redirectTo('#dataview/26');
    }
    else if (id == '5f1edb951b022e3f9003f13e') {
      this.redirectTo('#dataview/27');
    }
    else if (id == '5f1edb951b022e3f9003f13f') {
      this.redirectTo('#dataview/28');
    }
    else if (id == '5f1edb951b022e3f9003f140') {
      this.redirectTo('#dataview/29');
    }
    else if (id == '5f1edb951b022e3f9003f141') {
      this.redirectTo('#dataview/30');
    }
    else if (id == '5f1edb951b022e3f9003f142') {
      this.redirectTo('#dataview/31');
    }
    else if (id == '5f1edb951b022e3f9003f143') {
      this.redirectTo('#dataview/32');
    }
    else if (id == '5f1edb951b022e3f9003f144') {
      this.redirectTo('#dataview/33');
    }
    else if (id == '5f1edb951b022e3f9003f145') {
      this.redirectTo('#dataview/34');
    }
    else if (id == '5f1edb951b022e3f9003f146') {
      this.redirectTo('#dataview/35');
    }
    else if (id == '5f1edb951b022e3f9003f147') {
      this.redirectTo('#dataview/36');
    }
    else if (id == '5f1edb951b022e3f9003f148') {
      this.redirectTo('#dataview/37');
    }
    else if (id == '5f1edb951b022e3f9003f149') {
      this.redirectTo('#dataview/38');
    }
    else if (id == '5f1edb951b022e3f9003f14a') {
      this.redirectTo('#dataview/39');
    }
    else {
      Ext.Msg.alert('Keine Risikoursache gefunden');
    }

  }



});

