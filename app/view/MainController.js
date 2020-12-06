Ext.define('SL.view.MainController', {
  extend: 'Ext.app.ViewController',

  logout: function() {
    localStorage.setItem('basic_auth', '');
    location.reload();
  },

  onMenuSelect: function(view, record) {
    const className = record.get('className');
    const title = record.get('text');

    const tabPanel = this.lookup('mainTabPanel');
    let tab = this.lookup(className);

    if(!tab) {
      tab = Ext.create(className, {
        reference: className,
        closable: true,
        title: title
      });
      tabPanel.add(tab);
    }

    tabPanel.setActiveTab(tab);
  },

  afterRender: function() {
    const posts = this.getViewModel().getStore('posts');
    const users = this.getViewModel().getStore('users');

    users.load({
      callback: function() {
        posts.load();
      }
    });
  }
});
