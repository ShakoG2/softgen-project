Ext.define('SL.view.LoginWindowController', {
  extend: 'Ext.app.ViewController',

  login: function() {
    const me = this;
    const form = this.lookup('form');
    if(!form.getForm().isValid()) return ;
    const values = form.getForm().getValues();

    Ext.Ajax.request({
      url: `https://softlab-api.softgen.ge/login`,
      jsonData: values,
      method: 'POST',
      success: function(res) {
        const data = Ext.decode(res.responseText);
        localStorage.setItem('basic_auth', data.token);
        location.reload();
      },
      failure: function(res) {
        const data = Ext.decode(res.responseText);
        const errorMsg = data.message || 'Invalid username/password';
        me.getViewModel().set('errorMsg', errorMsg);
      }
    });
  }
});
