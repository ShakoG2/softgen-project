Ext.define('SL.view.posts.Grid', {
  extend: 'Ext.grid.Panel',
  reference: 'mainGrid',
  bind: {
    store: '{posts}'
  },
  controller: {
    xclass: 'SL.view.posts.GridController'
  },
  selModel: {
    selType: 'rowmodel',
    mode   : 'MULTI'
  },
  tbar: [{
    text: 'add',
    handler: 'addPost'
  }, {
    text: 'delete',
    bind: {
      disabled: '{!mainGrid.selection}'
    },
    handler: 'deletePost'
  }, {
    text: 'search',
    handler: 'search'
  }, {
    xtype: 'label',
    bind: {
      html: 'სათაური: {postTitleUpperCase}'
    }
  }],
  bbar: [{
      xtype: 'label',
      bind: {
        html: 'Title: {postTitle}'
      }
    }],
  columns: [{
    text: 'ID',
    width: 50,
    dataIndex: 'id'
  }, {
    text: 'user ID',
    dataIndex: 'userId',
    flex: 1,
  }, {
    text: 'user',
    dataIndex: 'userId',
    flex: 1,
    renderer: 'userRenderer'
  }, {
    text: 'Title',
    dataIndex: 'title',
    flex: 1
  }, {
    text: 'Body',
    dataIndex: 'body',
    flex: 2
  }, {
    text: 'Publish Date',
    dataIndex: 'publishDate',
    renderer: Ext.util.Format.dateRenderer('d.m.Y H:i:s')
  }],
  listeners: {
    itemdblclick: 'openPost',
    select: 'onSelect'
  }
});
