Ext.define("SORISMA.view.startScreen.startViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.startviewcontroller",
    refs: {
        personnelview: {
            autoCreate: true,
            selector: "#d3Sunburst",
            xtype: "d3Sunburst",
        },
    },

    onButtonForward: function(button) {
        this.redirectTo("#d3Sunburst");
    },
});