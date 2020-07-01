
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
    
    html: '<iframe src="html/sunburst2.html" scrolling="no" height="1100" width="100%"></iframe>',

});
