Ext.define("SORISMA.view.startScreen.startView", {
    xtype: "startview",
    cls: "startview",
    controller: { type: "startviewcontroller" },
    viewModel: { type: "startviewmodel" },
    requires: [],
    extend: "Ext.Container",
    scrollable: false,

    defaultType: "panel",

    //   html:
    //     '<iframe src="../uploads/logo.png" scrolling="no" height="900" width="100%"></iframe>',
    html: '<div style="display: block; margin-left: auto; margin-right: auto;  text-align: center; width: 50%; right: 40%"><a href="http://51.15.76.202:80/"><img src="../uploads/logo.png" alt="Sorismalogo" width="40%" height="100" top: "20%"></a></div>',
    items: {
        xtype: "button",
        iconCls: "x-fa fa-3x fa-forward",
        docked: true,
        width: "10%",
        floating: true,
        style: { position: "absolute", right: "45%", top: "20%" },
        docked: "bottom",
        tooltip: "Start",
        handler: "onButtonForward",
    },
});