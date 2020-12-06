Ext.define('SL.view.posts.EditPostWindow', {
  extend: 'Ext.window.Window',
  title: 'Post Editor',
  modal: true,
  layout: 'fit',
  width: 500,
  height: 400,
  config: {
    post: null
  },
  controller: {
    xclass: 'SL.view.posts.EditPostWindowController'
  },
  items: [{
    xtype: 'form',
    reference: 'form',
    listeners: {
      afterrender: 'windowAfterRender'
    },
    bodyPadding: 10,
    // model: 'SL.model.Post',
    fieldDefaults: {
      anchor: '100%',
      allowBlank: false
    },
    items: [{
      xtype: 'combobox',
      name: 'userId',
      fieldLabel: 'User ID',
      queryMode: 'local',
      editable: false,
      bind: {
        store: '{users}'
      },
      valueField: 'id',
      displayField: 'name',
      listeners: {
        change: 'handleUserChange'
      }
    }, {
      xtype: 'textfield',
      name: 'title',
      fieldLabel: 'Title'
    }, {
      xtype: 'textarea',
      name: 'body',
      fieldLabel: 'Body'
    }],
    buttons: [{
      text: 'save',
      handler: 'savePost'
    }]
  }]
});
