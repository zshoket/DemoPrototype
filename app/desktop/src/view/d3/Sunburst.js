
Ext.define('SORISMA.view.d3.Sunburst',{
    extend: 'Ext.panel.Panel',
    xtype: "d3Sunburst",
    controller: 'd3-sunburst',
    viewModel: {
        type: 'd3-sunburst'
    },

    requires: [
        "SORISMA.view.d3.SunburstController",
        "SORISMA.view.d3.SunburstModel",
        "Ext.form.FieldSet",
        "Ext.form.field.*",
    ],
   scrollable: false,

    defaultType: "panel",
    
    html: '<iframe src="html/sunburst.html" height="700" width="1200"></iframe>',
    /* items: [{
        xtype: 'box',
        autoEl: {
            tag: 'iframe',
            src: 'html\sunburst.html',
        },  
    
    /* config: {
        id: 'MyPanel',
        itemId: 'MyPanel',
        scrollable: true,
        listeners: [
            {
                fn: 'onMyPanelActivate',
                event: 'activate'
            }
        ]
    },    onMyPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        Ext.Ajax.request({
            url: 'html\sunburst.html',
            success : function(response) {
               Ext.getCmp('MyPanel').setHtml(response.responseText);
            },
            failure : function(response) {  
                var text = response.responseText;
                Ext.Msg.alert('Error', text, Ext.emptyFn);            }
        });
    } 
    }] */
 
});
