Ext.define('SL.view.posts.SearchForm', {
  extend: 'Ext.form.Panel',
  border: false,
  bodyPadding: 10,
  layout: 'hbox',
  controller: {
    xclass: 'SL.view.posts.SearchFormController'
  },
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 150,
    flex: 1
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
    displayField: 'name'
  }, {
    xtype: 'textfield',
    name: 'title',
    fieldLabel: 'Title'
  }, {
    xtype: 'textfield',
    name: 'body',
    fieldLabel: 'Body'
  }],
  buttons: [{
    text: 'Search',
    handler: 'search'
  }, {
    text: 'reset',
    handler: 'resetForm'
  }]
});
