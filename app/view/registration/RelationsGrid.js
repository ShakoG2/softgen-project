Ext.define('SL.view.registration.RelationsGrid', {
  extend: 'Ext.grid.Panel',
  bind: {
    store: '{relations}'
  },
  plugins: {
    ptype: 'rowediting',
    clicksToEdit: 2,
    removeUnmodified: true,
    errorSummary: true
  },
  tbar: [{
    text: 'დამატება',
    handler: 'addRelation'
  }, {
    text: 'წაშლა',
    handler: 'deleteRelation'
  }],
  columns: [{
    text: 'ID',
    dataIndex: 'id',
    width: 100,
    hidden: true,
  }, {
    text: 'კავშირის ტიპი',
    dataIndex: 'type',
    flex: 1,
    renderer: 'relationTypeRenderer',
    editor: {
      xtype: 'combo',
      allowBlank: false,
      bind: {
        store: '{relationTypes}'
      },
      valueField: 'id',
      displayField: 'name',
      editable: false,
      queryMode: 'local',
    }
  }, {
    text: 'სახელი',
    dataIndex: 'firstName',
    flex: 1,
    editor: {
      xtype: 'textfield',
      allowBlank: false,
    }
  }, {
    text: 'გვარი',
    dataIndex: 'lastName',
    flex: 1,
    editor: {
      xtype: 'textfield',
      allowBlank: false,
    }
  }, {
    xtype: 'datecolumn',
    text: 'დაბ. თარიღი',
    dataIndex: 'birthDate',
    format: 'd.m.Y',
    flex: 1,
    editor: {
      xtype: 'datefield',
      format: 'd.m.Y'
    }
  }, {
    xtype: 'actioncolumn',
    width: 80,
    items: [{
      iconCls: 'fa fa-trash-o',
      handler: 'deleteRelation'
    }]
  }]
})
