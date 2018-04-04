/**
 * Created by Administrator on 2018/4/3 0003.
 */
Ext.application({
    name: 'HelloExt',
    launch: function() {
        var childPanel1 = Ext.create('Ext.panel.Panel', {
            title: 'Child Panel 1',
            html: 'A Panel'
        });

        var childPanel2 = Ext.create('Ext.panel.Panel', {
            title: 'Child Panel 2',
            html: 'Another Panel'
        });

        Ext.create('Ext.container.Viewport', {//从Ext.create开始渲染
            items: [ childPanel1, childPanel2 ]
        });

    }
});