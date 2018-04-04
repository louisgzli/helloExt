/**
 * Created by Administrator on 2018/4/4 0004.
 */
Ext.onReady(function () {
    var child1 = Ext.create('Ext.Panel',{
        html: 'Text field'
    });

    var child2 = Ext.create('Ext.Panel',{
        html: 'Text field'
    });
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 100,
        height : 100,
        border : true,
        frame : true,
        layout: 'auto',// auto is one of the layout type.
        items: [child1, child2]
    });
});