Ext.define('SORISMA.store.HomeViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.homeviewstore',
    model: 'SORISMA.model.Usecase',
    
    proxy: {
        type: "ajax", 
        
        url: "http://localhost:3002/getAll",
       // url: "http://localhost:3001/api/documents",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    listeners: {
load: function(store, records, successful){
function base64convert(str)
{
return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))); //(in this line IE creating problem)
}
var imagedatafrmserver;
var localdata;
var f;
for(var i=0;i<store.getTotalCount();i++){
//alert(records[i].get('imagedata'));
imagedatafrmserver=records[i].get('imagedata')
localdata=base64convert(imagedatafrmserver)
f=store.getAt(i)
f.set('imagedata',localdata);
store.commitChanges();
}
}
},
    autoLoad: true
});