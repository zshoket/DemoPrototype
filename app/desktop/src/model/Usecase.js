Ext.define("SORISMA.model.Usecase", {
    extend: "Ext.data.Model",
    xtype: "model.usecasemodel",
    fields: [
        { name: "id", type: "auto", defaultValue: null },
        { name: "name", type: "string" },
        { name: "unternehmen", type: "auto" },
        { name: "dimension", type: "auto" },
        { name: "einordnungKette", type: "auto" },
        { name: "kurzbeschreibung", type: "auto" },
        { name: "reifegrad", type: "auto" },
        { name: "nutzenversprechen", type: "auto" },
        { name: "herausforderungen", type: "auto" },
        { name: "veränderungenMensch", type: "auto" },
        { name: "veränderungenOrganisation", type: "auto" },
        { name: "veränderungenTechnologie", type: "auto" }
    ]
});
