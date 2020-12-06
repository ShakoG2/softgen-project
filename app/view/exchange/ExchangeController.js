Ext.define('SL.view.exchange.ExchangeController', {
  extend: 'Ext.app.ViewController',

  exchange: function() {
    const form = this.lookup('form');
    if(!form.isValid()) return ;
    const values = form.getForm().getValues();
    values.sellAmount = Number(values.buyAmount) * Number(values.rate);
    values.exchangeDate = new Date().toISOString();
    console.log(values);
    this.getViewModel().set('sellAmount', values.sellAmount);

    const store = this.getViewModel().getStore('exchangeOperations');
    const operation = Ext.create('SL.model.ExchangeOperation', values);
    store.add(operation);
  },

  reset: function() {
    const form = this.lookup('form');
    form.getForm().reset();
    form.getForm().setValues({
      rate: this.getViewModel().get('initialRate'),
    });
  },

  deleteOperation: function(grid, rowIndex, colIndex) {
    Ext.Msg.confirm('ყურადღება', 'დარწმუნებული ხართ, რომ გინდათ წაშლა?', function(ans) {
      if(ans === 'yes') {
        const store = this.getViewModel().getStore('exchangeOperations');
        store.removeAt(rowIndex);
      }
    }, this);
  }
});
