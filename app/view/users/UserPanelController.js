Ext.define('SL.view.users.UserPanelController', {
  extend: 'Ext.app.ViewController',
  requires: ['SL.model.User'],

  add: function(){
    const newUser = Ext.create('SL.model.User');
    const store = this.getViewModel().getStore('users');
    store.insert(0, newUser);
    const grid = this.lookup('usersGrid');
    grid.editingPlugin.startEdit(0, 1);
  },

  remove: function() {
    const grid = this.lookup('usersGrid');
    const store = this.getViewModel().getStore('users');
    const user = grid.getSelectionModel().getSelection()[0];
    store.remove(user);
  },

  save: function() {
    this.getViewModel().getStore('users').sync();
  }
});
