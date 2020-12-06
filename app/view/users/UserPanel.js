Ext.define('SL.view.users.UserPanel', {
  extend: 'Ext.panel.Panel',
  requires: ['SL.model.User'],
  controller: {
    xclass: 'SL.view.users.UserPanelController'
  },
  viewModel: {
    stores: {
      users: {
        model: 'SL.model.User',
        autoLoad: true,
        autoSync: false
      }
    }
  },
  items: [{
    xtype: 'grid',
    bind: '{users}',
    reference: 'usersGrid',
    tbar: [{
      text: 'დამატება',
      handler: 'add'
    }, {
      text: 'წაშლა',
      bind: {
        disabled: '{!usersGrid.selection}'
      },
      handler: 'remove'
    }],
    bbar: [{
      text: 'შენახვა',
      handler: 'save'
    }],
    plugins: {
      ptype: 'rowediting',
      clicksToEdit: 2,
      removeUnmodified: true,
      errorSummary: true
    },
    columns: [{
      text: 'id',
      dataIndex: 'id'
    }, {
      text: 'name',
      dataIndex: 'name',
      flex: 1,
      editor: {
        xtype: 'textfield',
        allowBlank: false,
        regex: /^[a-zA-Zა-ჰ .']+$/,
      }
    }, {
      text: 'username',
      dataIndex: 'username',
      flex: 1,
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    }, {
      text: 'email',
      dataIndex: 'email',
      flex: 1,
      editor: {
        xtype: 'textfield',
        allowBlank: false,
        vtype: 'email'
      }
    }]
  }]
});
