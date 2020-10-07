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
             
            onApprove: function(grid, info) {
              var myId = info.record.get('id');
              var url = "http://localhost:3001/api/documents/"+myId+"/risikos";
              debugger
              //obj = Response.url;
              // var jsonObject= JSON.stringify(response); 
              // var count = JSON.parse(jsonObject).length;

              // function isEmptyObject(url) {
              //   return !Object.keys(url).length;
              // }
              
              // function isEmptyObject(obj) {
              //   for (var key in obj) {
              //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
              //       return false;
              //     }
              //   }
              //   return true;
              // }

              if (url.Response == []) {
                 Ext.Msg.alert('No Risks Found');
              }else {
                window.location = url;
               }
          // if (Object.keys(result).length == 2) {
          //    alert('empty obj')
          //   }
              // obj = url;  
              // if (Object.keys(obj).length === 2)
              // {
              //   Ext.Msg.alert('No Risks Found');
              // } 
              //  else
              //  {
              //    window.location = url;
              //  }
              
          },

        onItemSelected: function(grid,records,e) {
            var record = records[0];
            var id = record.get('id');
            if (id == '5ece3143a7f3956194cb74e9') {
                this.redirectTo('#homeview/0');
              } else if (id == '5ece35effa40f7426cba7b8d') {
                this.redirectTo('#homeview/1');
              } 
              else if (id == '5ece3891d8dcf967fc541359') {
                this.redirectTo('#homeview/2');
              }
              else if (id == '5ece3abad8dcf967fc54135a') {
                this.redirectTo('#homeview/3');
              }
              else if (id == '5ece3cefd8dcf967fc54135b') {
                this.redirectTo('#homeview/4');
              }
              else if (id == '5ece3fd8d8dcf967fc54135c') {
                this.redirectTo('#homeview/5');
              }
              else if (id == '5ece6d0cdc58f20eb4cb2f53') {
                this.redirectTo('#homeview/6');
              }
              else if (id == '5ece6ed5f1cb7b3488f775ea') {
                this.redirectTo('#homeview/7');
              }
              else if (id == '5ece8983f1cb7b3488f775eb') {
                this.redirectTo('#homeview/8');
              }
              else if (id == '5ece8b99f1cb7b3488f775ec') {
                this.redirectTo('#homeview/9');
              }
              else if (id == '5ed3e105a4caf849745b1210') {
                this.redirectTo('#homeview/10');
              }
              else if (id == '5ed3e205a4caf849745b1211') {
                this.redirectTo('#homeview/11');
              }
              else if (id == '5ed3e430a4caf849745b1212') {
                this.redirectTo('#homeview/12');
              }
              else if (id == '5ed3e5aba4caf849745b1213') {
                this.redirectTo('#homeview/13');
              }
              else if (id == '5ed3e6d7a4caf849745b1214') {
                this.redirectTo('#homeview/14');
              }
              else if (id == '5ed3e84ea4caf849745b1215') {
                this.redirectTo('#homeview/15');
              }
              else if (id == '5ed3e92fa4caf849745b1216') {
                this.redirectTo('#homeview/16');
              }
              else if (id == '5ed3ea19a4caf849745b1217') {
                this.redirectTo('#homeview/17');
              }
              else if (id == '5ed3eb60a4caf849745b1218') {
                this.redirectTo('#homeview/18');
              }
              else if (id == '5ed3ec75a4caf849745b1219') {
                this.redirectTo('#homeview/19');
              }
              else if (id == '5ed3ed79a4caf849745b121a') {
                this.redirectTo('#homeview/20');
              }
              else if (id == '5ed3ee29a4caf849745b121b') {
                this.redirectTo('#homeview/21');
              }
              else if (id == '5ed3ef08a4caf849745b121c') {
                this.redirectTo('#homeview/22');
              }
              else if (id == '5ed3f028a4caf849745b121d') {
                this.redirectTo('#homeview/23');
              }
              else if (id == '5ed5032db17d4786e8d935ad') {
                this.redirectTo('#homeview/24');
              }
              else if (id == '5ed50355b17d4786e8d935ae') {
                this.redirectTo('#homeview/25');
              }
              else if (id == '5ed50396b17d4786e8d935af') {
                this.redirectTo('#homeview/26');
              }
              else if (id == '5ed50396b17d4786e8d935b0') {
                this.redirectTo('#homeview/27');
              }
              else if (id == '5ed503d6b17d4786e8d935b1') {
                this.redirectTo('#homeview/28');
              }
              else if (id == '5ed503d6b17d4786e8d935b2') {
                this.redirectTo('#homeview/29');
              }
              else if (id == '5ed50669b17d4786e8d935b3') {
                this.redirectTo('#homeview/30');
              }
              else if (id == '5ed50a8bb17d4786e8d935b4') {
                this.redirectTo('#homeview/31');
              }
              else if (id == '5ed50a8bb17d4786e8d935b5') {
                this.redirectTo('#homeview/32');
              }
              else if (id == '5ed50e9eb17d4786e8d935b6') {
                this.redirectTo('#homeview/33');
              }
              else if (id == '5ed50e9eb17d4786e8d935b7') {
                this.redirectTo('#homeview/34');
              }
              else if (id == '5ed52284b17d4786e8d935b8') {
                this.redirectTo('#homeview/35');
              }
              else if (id == '5ed52284b17d4786e8d935b9') {
                this.redirectTo('#homeview/36');
              }
              else if (id == '5ed52284b17d4786e8d935ba') {
                this.redirectTo('#homeview/37');
              }
              else if (id == '5ed52284b17d4786e8d935bb') {
                this.redirectTo('#homeview/38');
              }
              else if (id == '5ed52284b17d4786e8d935bc') {
                this.redirectTo('#homeview/39');
              }
              else if (id == '5ed52dcdb17d4786e8d935bd') {
                this.redirectTo('#homeview/40');
              }
              else if (id == '5ed52dcdb17d4786e8d935be') {
                this.redirectTo('#homeview/41');
              }
              else if (id == '5ed52dcdb17d4786e8d935bf') {
                this.redirectTo('#homeview/42');
              }
              else if (id == '5ed52dcdb17d4786e8d935c0') {
                this.redirectTo('#homeview/43');
              }
              else if (id == '5ed52dcdb17d4786e8d935c1') {
                this.redirectTo('#homeview/44');
              }
              else if (id == '5ed53552b17d4786e8d935c2') {
                this.redirectTo('#homeview/45');
              }
              else if (id == '5ed53552b17d4786e8d935c3') {
                this.redirectTo('#homeview/46');
              }
              else if (id == '5ed53552b17d4786e8d935c4') {
                this.redirectTo('#homeview/47');
              }
              else if (id == '5ed53552b17d4786e8d935c5') {
                this.redirectTo('#homeview/48');
              }
              else if (id == '5ed53552b17d4786e8d935c6') {
                this.redirectTo('#homeview/49');
              }
              else if (id == '5ed53e72b17d4786e8d935c7') {
                this.redirectTo('#homeview/50');
              }
              else if (id == '5ed53e72b17d4786e8d935c8') {
                this.redirectTo('#homeview/51');
              }
              else if (id == '5ed53e72b17d4786e8d935c9') {
                this.redirectTo('#homeview/52');
              }
              else if (id == '5ed53e72b17d4786e8d935ca') {
                this.redirectTo('#homeview/53');
              }
              else if (id == '5ed53e72b17d4786e8d935cb') {
                this.redirectTo('#homeview/54');
              }
              else if (id == '5f3e86ea32f0d03c38123469') {
                this.redirectTo('#homeview/55');
              }
              else
              {
                alert("Does not exists");
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
