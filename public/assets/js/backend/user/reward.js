define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/reward/index' + location.search,
                    add_url: 'user/reward/add',
                    edit_url: 'user/reward/edit',
                    del_url: 'user/reward/del',
                    multi_url: 'user/reward/multi',
                    table: 'reward_log',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'bookid', title: __('Bookid')},
                        {field: 'status', title: __('Status'), searchList: {"cartoon":__('Status cartoon'),"novel":__('Status novel'),"listen":__('Status listen')}, formatter: Table.api.formatter.status},
                        {field: 'score', title: __('Score')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});