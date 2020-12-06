Ext.define('SL.view.exchange.ExchangeViewModel', {
  extend: 'Ext.app.ViewModel',
  requires: ['SL.model.ExchangeOperation'],
  data: {
    initialRate: 3.3,
    sellAmount: null,
  },

  formulas: {
    rate: function(get) {
      const spec = get('specRateField.checked');
      const damaged = get('damagedField.checked');
      const rate = get('initialRate');

      return spec ? rate + '' : damaged ? rate * 0.9 : rate;
    }
  },

  stores: {
    exchangeOperations: {
      model: 'SL.model.ExchangeOperation',
      autoLoad: true,
      autoSync: true,
    }
  }
});
