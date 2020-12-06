Ext.define('SL.view.exchange.Exchange', {
  extend: 'Ext.panel.Panel',
  title: 'კონვერტაცია',
  viewModel: {
    xclass: 'SL.view.exchange.ExchangeViewModel'
  },
  controller: {
    xclass: 'SL.view.exchange.ExchangeController'
  },
  layout: {
    type: 'vbox',
    align: 'stretch',
  },
  items: [{
    xtype: 'form',
    border: false,
    reference: 'form',
    layout: {
      type: 'hbox',
      // align: 'stretch'
    },
    fieldDefaults: {
      labelAlign: 'top',
      anchor: '100%',
      allowBlank: false,
    },
    defaultType: 'fieldset',
    defaults: {
      border: false,
      flex: 1
    },
    items: [{
      defaultType: 'numberfield',
      items: [{
        fieldLabel: 'მისაღები თანხა (USD)',
        name: 'buyAmount',
      }, {
        fieldLabel: 'გასაცემი თანხა (GEL)',
        name: 'sellAmount',
        readOnly: true,
        bind: '{sellAmount}',
        allowBlank: true,
      }]
    }, {
      items: [{
        xtype: 'numberfield',
        fieldLabel: 'კურსი',
        name: 'rate',
        decimalPrecision: 4,
        bind: {
          value: '{rate}',
          readOnly: '{!specRateField.checked}',
        }
      }, {
        xtype: 'checkbox',
        name: 'specRate',
        reference: 'specRateField',
        boxLabel: 'სპეც. კურსი'
      }, {
        xtype: 'checkbox',
        name: 'damaged',
        reference: 'damagedField',
        boxLabel: 'დაზიანებული ვალუტა',
        bind: {
          disabled: '{specRateField.checked}'
        }
      }]
    }, {
      padding: 10,
      defaults: {
        xtype: 'button',
        anchor: '100%',
        scale: 'large'
      },
      items: [{
        text: 'კონვერტაცია',
        handler: 'exchange'
      }, {
        text: 'გასუფთავება',
        margin: '20 0 0 0',
        handler: 'reset'
      }]
    }]
  }, {
    xtype: 'grid',
    flex: 1,
    bind: {
      store: '{exchangeOperations}'
    },
    forceFit: true,
    columns: [{
      xtype: 'rownumberer',
    }, {
      text: 'ID',
      hidden: true,
      dataIndex: 'id'
    }, {
      xtype: 'numbercolumn',
      text: 'მისაღები თანხა',
      dataIndex: 'buyAmount',
      align: 'right',
      format: '0.00 USD'
    }, {
      xtype: 'numbercolumn',
      text: 'გასაცემი თანხა',
      dataIndex: 'sellAmount',
      align: 'right',
      format: '0.00 GEL'
    }, {
      xtype: 'numbercolumn',
      text: 'კურსი',
      dataIndex: 'rate',
      align: 'right',
      format: '0.0000'
    }, {
      xtype: 'booleancolumn',
      text: 'სპეც. კურსი',
      dataIndex: 'specRate',
      align: 'center',
      trueText: '<i class="fa fa-check"></i>',
      falseText: ''
    }, {
      xtype: 'booleancolumn',
      text: 'დაზიანებული ვალუტა',
      dataIndex: 'damaged',
      align: 'center',
      trueText: '<i class="fa fa-check"></i>',
      falseText: ''
    }, {
      xtype: 'datecolumn',
      text: 'თარიღი',
      dataIndex: 'exchangeDate',
      format: 'Y-m-d H:i:s',
    }, {
      xtype: 'actioncolumn',
      items: [{
        iconCls: 'fa fa-trash-o',
        tooltip: 'წაშლა',
        handler: 'deleteOperation'
      }]
    }]
  }]
});
