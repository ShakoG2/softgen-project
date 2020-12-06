Ext.define('SL.view.posts.GridController', {
  extend: 'Ext.app.ViewController',

  addPost: function() {
    Ext.create('SL.view.posts.EditPostWindow', {
      autoShow: true
    });
  },

  // editPost: function(view, record) {
  //   Ext.create('SL.view.posts.EditPostWindow', {
  //     autoShow: true,
  //     post: record
  //   });
  // },

  deletePost: function() {
    const grid = this.getView();
    const selected = grid.getSelectionModel().getSelection()[0];
    if(!selected) return ;

    grid.setLoading('მიმდინარეობს წაშლა...');

    selected.erase({
      success: function() {
        Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
      },
      failure: function(record, operation) {
        Ext.Msg.alert('შეცდომა', operation.error.response.statusText);
        grid.getStore().reload();
      },
      callback: function() {
        grid.setLoading(false);
      }
    });
  },

  openPost: function(view,record) {
    Ext.create('SL.view.posts.ViewPostWindow', {
      post: record,
      autoShow: true,
    });
  },

  search: function() {
    const store = this.getViewModel().getStore('posts');
    store.load({
      params: {
        userId: 1
      }
    });
  },

  onSelect: function(view, record) {
    this.getViewModel().set('postTitle', record.get('title'));
  },

  userRenderer: function(userId) {
    const store = this.getViewModel().getStore('users');
    const user = store.getById(userId);
    return user.get('name');
  }
});
