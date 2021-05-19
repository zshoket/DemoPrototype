Ext.define("SORISMA.view.graphic.graphicViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.graphicviewcontroller",

    oniFrameButton: function(button) {
        // document.getElementById("iframeid").src += "";
        debugger;
        // var myIframe = (document.getElementById("iframeid").src += "");
        // document.myIframe.location.reload();
        // window.history.back();
        window.frames[0].location.reload();

        this.redirectTo("#d3Sunburst");
    },
});