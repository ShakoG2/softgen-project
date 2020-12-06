Ext.define('SL.view.posts.ViewPostWindow', {
  extend: 'Ext.window.Window',
  title: 'View Post Editor',
  modal: true,
  layout: {
    type: 'vbox',
    align: 'stretch',
  },
  width: 800,
  height: 600,
  config: {
    post: null,
  },
  requires: ['SL.model.Comment'],
  viewModel: {
    stores: {
      comments: {
        model: 'SL.model.Comment',
      },
    },
  },

  controller: {
    xclass: 'SL.view.posts.ViewPostWindowController',
  },
  items: [{
    xtype: 'form',
    reference: 'form',
    bodyPadding: 10,
    // model: 'SL.model.Post',
    fieldDefaults: {
      anchor: '100%',
      allowBlank: false,
    },
    listeners: {
      afterrender: 'formAfterRender',
    },
    defaultType: 'displayfield',
    items: [{
      name: 'userId',
      fieldLabel: 'User ID',
    }, {
      name: 'title',
      fieldLabel: 'Title',
    }, {
      name: 'body',
      fieldLabel: 'Body',
    }],
  }, {
    xtype: 'grid',
    flex: 1,
    title: 'კომენტარები',
    bind: '{comments}',
    columns: [{
      text: 'ID',
      dataIndex: 'id',
    }, {
      text: 'Name',
      dataIndex: 'name',
      flex: 1,
    }, {
      text: 'Body',
      dataIndex: 'body',
      flex: 2,
    }, {
      text: 'email',
      dataIndex: 'email',
      flex: 1,
    }],
  }],
  buttons: [{
    text: 'რედაქტირება',
    handler: 'openEditPostWindow',
  }, {
    text: 'დახურვა',
    handler: 'close',
  }],
});
