Ext.define("SORISMA.model.Risikos", {
        extend: "Ext.data.Model",
        xtype: "model.risikosmodel",
        fields: [
            { name: "id", type: "auto", defaultValue: null },
            { name: "name", type: "string" },
            { name: "eintritWahr", type: "auto" },
            { name: "schadenshohe", type: "auto" },
            { name: "dimension", type: "auto" },
            { name: "risikoursachenId", type: "auto" },
            { name: "documentsId", type: "auto" }
        ],
       // hasMany: {model: 'SORISMA.model.Ursachen', name: 'ursachen', foreignKey: 'risikoursachenId'},
    
      
    });



    Ext.define("SORISMA.model.Ursachen", {
        extend: "Ext.data.Model",
        
        fields: [
            { name: "id", type: "auto", defaultValue: null },
            { name: "name", type: "string" },
            { name: "bereich", type: "auto" },
            { name: "risikoId", type: "auto", reference: 'Risikos' },
            { name: "documentsId", type: "auto", reference: 'Risikos' }
        ],
      
    });


    Ext.define("SORISMA.model.Auswirkung", {
        extend: "Ext.data.Model",
        
        fields: [
            { name: "id", type: "auto", defaultValue: null },
            { name: "name", type: "string" },
            { name: "risikoId", type: "auto", reference: 'Risikos' },
            { name: "documentsId", type: "auto", reference: 'Risikos' }
        ],
     
    
    });

        