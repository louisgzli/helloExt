Ext.onReady(function (){

    Ext.create("Ext.panel.Panel",{
       title:"helloworld",
        width: 400,
        height: 200,
        renderTo:"helloworld1",
        layout:"column",

        items:[{
           xtype:"panel",
            height:100,
            title:"cpp",
            html:"this is cpp",
            hideMode:"dislay",
            columnWidth:0.5
        },{
           xtype:"panel",
            title:"java",
            height:100,
            html:"this is java",
            columnWidth:0.5
        }]
    });
});