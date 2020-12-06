Ext.define('SL.model.ExchangeOperation', {
  extend: 'Ext.data.Model',
  fields: ['id', {
    name: 'buyAmount',
    type: 'number'
  }, {
    name: 'sellAmount',
    type: 'number'
  }, {
    name: 'rate',
    type: 'number'
  }, {
    name: 'specRate',
    type: 'boolean'
  }, {
    name: 'damaged',
    type: 'boolean'
  }, {
    name: 'exchangeDate',
    dateFormat: 'C',
    type: 'date'
  }],

  proxy: {
    type: 'rest',
    url: 'https://softlab-api.softgen.ge/username/exchange/operations',
    writer: {
      writeAllFields: true,
      writeRecordId: false,
    }
  }
});
