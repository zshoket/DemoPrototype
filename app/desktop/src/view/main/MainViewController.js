Ext.define("SORISMA.view.main.MainViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.mainviewcontroller",

    routes: {
        ":xtype": { action: "mainRoute" },
        "homeview/:id": {
            action: "showUsecase",
            conditions: {
                ":id": "([0-9]+)"
            }
        }
    },

    showUsecase: function(id) {
        var me = this;

        me.getViewModel().set("main_activeID", id);
        var centerview = me.lookup("centerview");
        var navview = this.lookup("navview");
        var menuview = navview.items.items[0];
        var node = menuview.getStore().findNode("xtype", "homeview");
        centerview.setActiveItem("homeview");
        menuview.setSelection(node);
        var vm = this.getViewModel();
        vm.set("heading", node.get("text"));

        var homeview = Ext.getCmp("homeview");
        if (homeview) {
            var homeController = homeview.getController();
            homeController.reloadData();
        }
    },

    mainRoute: function(xtype) {
        //var menuview = this.lookup('menuview');
        var navview = this.lookup("navview");
        var menuview = navview.items.items[0];

        var centerview = this.lookup("centerview");
        var exists = Ext.ClassManager.getByAlias("widget." + xtype);
        if (exists === undefined) {
            console.log(xtype + " does not exist");
            return;
        }
        var node = menuview.getStore().findNode("xtype", xtype);
        if (node == null) {
            console.log("unmatchedRoute: " + xtype);
            return;
        }
        if (!centerview.getComponent(xtype)) {
            centerview.add({
                xtype: xtype,
                itemId: xtype,
                heading: node.get("text")
            });
        }
        this.getViewModel().set("main_activeID", 0);
        var homeview = Ext.getCmp("homeview");
        if (homeview) {
            var homeController = homeview.getController();
            homeController.reloadData();
        }
        centerview.setActiveItem(xtype);
        menuview.setSelection(node);
        var vm = this.getViewModel();
        vm.set("heading", node.get("text"));
    },

    onMenuViewSelectionChange: function(tree, node) {
        if (node == null) {
            return;
        }
        var vm = this.getViewModel();
        if (node.get("xtype") != undefined) {
            this.redirectTo(node.get("xtype"));
        }
    },

    onTopViewNavToggle: function() {
        var vm = this.getViewModel();
        vm.set("navCollapsed", !vm.get("navCollapsed"));
    },

    /* onHeaderViewDetailToggle: function (button) {
		var vm = this.getViewModel();
		vm.set('detailCollapsed', !vm.get('detailCollapsed'));
		if(vm.get('detailCollapsed')===true) {
			button.setIconCls('x-fa fa-arrow-left');
		}
		else {
			button.setIconCls('x-fa fa-arrow-right');
		}
	}, */

    onBottomViewlogout: function() {
        localStorage.setItem("LoggedIn", false);
        this.getView().destroy();
        Ext.Viewport.add([{ xtype: "loginview" }]);
    }

    

    //	onActionsViewLogoutTap: function( ) {
    //		var vm = this.getViewModel();
    //		vm.set('firstname', '');
    //		vm.set('lastname', '');
    //
    //		Session.logout(this.getView());
    //		this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
    //	}
});
