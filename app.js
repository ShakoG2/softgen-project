Ext.application({
  name: 'SL',
  appFolder: 'app',
  requires: [
    'SL.view.Main',
    'SL.view.LoginWindow',
  ],
  launch: function() {
    Ext.Ajax.request({
      url: `https://softlab-api.softgen.ge/user`,
      method: 'GET',
      success: function(res) {
        window.user = Ext.decode(res.responseText);
        Ext.create('Ext.container.Viewport', {
          layout: 'fit',
          items: [{
            xclass: 'SL.view.Main',
          }],
        });
      },
    });
  },
});

Ext.Ajax.on({
  beforerequest: function(conn, options) {
    options.headers = options.headers || {};
    const token = localStorage.getItem('basic_auth');
    if (token) {
      options.headers['Authorization'] = token;
    }
  },
  requestexception: function(conn, response, options) {
    let errorMsg;
    try {
      const data = Ext.decode(response.responseText);
      errorMsg = data.message;
    } catch (e) {
      errorMsg = response.statusText;
    }
    if (response.status === 401) {
      if (!SL.view.LoginWindow.shown) {
        Ext.create('SL.view.LoginWindow');
      }
    } else
      Ext.Msg.alert('შეცდომა', `${response.status} ${errorMsg}`);
  },
});
