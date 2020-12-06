Ext.define('SL.view.Main', {
  extend: 'Ext.panel.Panel',
  layout: 'border',
  controller: {
    xclass: 'SL.view.MainController',
  },
  viewModel: {
    xclass: 'SL.view.MainViewModel',
  },
  items: [{
    xtype: 'panel',
    reference: 'header',
    height: 50,
    bodyPadding: 10,
    margin: '0 0 5 0',
    region: 'north',
    layout: {
      type: 'hbox',
      align: 'stretch',
    },
    items: [{
      xtype: 'label',
      flex: 1,
      html: '<strong>Softlab</strong>',
    }, {
      xtype: 'label',
      padding: 5,
      bind: {
        html: '{@window.user.firstName} {@window.user.lastName}'
      },
    }, {
      xtype: 'button',
      text: 'Log out',
      handler: 'logout',
    }],
  }, {
    xtype: 'panel',
    width: 200,
    title: 'Menu',
    split: true,
    collapsible: true,
    region: 'west',
    layout: {
      type: 'vbox',
      align: 'stretch',
    },
    items: [{
      xtype: 'treelist',
      flex: 1,
      bind: '{navItems}',
      listeners: {
        selectionchange: 'onMenuSelect',
      },
    }, {
      xtype: 'button',
      text: 'Softlab',
      margin: 10,
    }],
  }, {
    xtype: 'tabpanel',
    reference: 'mainTabPanel',
    region: 'center',
    items: [{
      xclass: 'SL.view.registration.Customers',
      title: 'რეგისტრაცია'
    }],
  }],
});
