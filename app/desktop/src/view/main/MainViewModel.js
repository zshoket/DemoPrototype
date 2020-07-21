Ext.define("SORISMA.view.main.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.mainviewmodel",
    data: {
        name: '<img src="/uploads/logo.png" alt="Sorismalogo">',
        navCollapsed: false,
        navview_max_width: 300,
        navview_min_width: 44,
        topview_height: 75,
        bottomview_height: 50,
        headerview_height: 50,
        footerview_height: 50,
        detailCollapsed: true,
        main_activeID: 0 // ID des grade aktiven Eintrags
        /* detailview_width:      10,
		detailview_max_width: 300,
		detailview_min_width:   0, */
    },
    formulas: {
        navview_width: function(get) {
            return get("navCollapsed")
                ? get("navview_min_width")
                : get("navview_max_width");
        }
        /* detailview_width: function(get) {
			return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
		} */
    },
    stores: {
        menu: {
            type: "tree",
            root: {
                expanded: true,
                children: [
                    {
                        text: "SORISMA Use-Case GraphView",
                        iconCls: "x-fa fa-crosshairs",
                        xtype: "d3Sunburst",
                        leaf: true
                    },
                    {
                        text: "Use Case Documents",
                        iconCls: "x-fa fa-home",
                        xtype: "homeview",
                        leaf: true
                    },
                    {
                        text: "UseCases GridView",
                        iconCls: "x-fa fa-table",
                        xtype: "personnelview",
                        leaf: true
                    }
                    
                    
                ]
            }
        }
    }
});
