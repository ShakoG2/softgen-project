Ext.define('SL.view.posts.ViewPostWindowController', {
  extend: 'Ext.app.ViewController',

  formAfterRender: function() {
    const form = this.lookup('form');
    let post = this.getView().getPost();
    if (!post) {
      post = Ext.create('SL.model.Post');
    }
    form.loadRecord(post);
  },

  openEditPostWindow: function() {
    const me = this;

    Ext.create('SL.view.posts.EditPostWindow', {
      autoShow: true,
      post: me.getView().getPost(),
    });

    this.close();
  },

  close: function() {
    this.getView().close();
  },

  afterRender: function() {
    const store = this.getViewModel().getStore('comments');
    const users = this.getViewModel().getStore('users');
    console.log(users);

    let post = this.getView().getPost();

    store.load({
      params: {
        postId: post.getId()
      }
    });
  }
});
