Ext.define('SL.view.LoginWindow', {
  extend: 'Ext.window.Window',
  title: 'ავტორიზაცია',
  modal: true,
  width: 300,
  autoShow: true,
  layout: 'fit',
  statics: {
    shown: false,
  },
  constructor: function(cfg) {
    const statics = this.statics()
    statics.shown = true;
    this.callParent(arguments);
  },
  viewModel: {
    data: {
      errorMsg: ''
    }
  },
  controller: {
    xclass: 'SL.view.LoginWindowController'
  },
  items: [{
    xtype: 'form',
    bodyPadding: 10,
    reference: 'form',
    fieldDefaults: {
      labelAlign: 'top',
      anchor: '100%',
      allowBlank: false
    },
    items: [{
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'მომხმარებელი'
    }, {
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'პაროლი'
    }, {
      xtype: 'displayfield',
      bind: {
        value: '{errorMsg}',
        hidden: '{!errorMsg}'
      }
    }],
    buttons: [{
      text: 'შესვლა',
      handler: 'login'
    }]
  }]
})
