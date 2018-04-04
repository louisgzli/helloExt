/**
 * Created by Administrator on 2018/4/4 0004.
 */
Ext.onReady(function() { //渲染extjs 元素
    Ext.create('Ext.Panel', {//实例化对象
        renderTo: 'helloWorldPanel', //position renderTo id of html element
        height: 200,
        width: 600,
        title: 'Hello world',// title of Panel
        html: 'First Ext JS Hello World Program' //content displayed in panel
    });
});