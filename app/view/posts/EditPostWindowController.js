Ext.define('SL.view.posts.EditPostWindowController', {
  extend: 'Ext.app.ViewController',

  formAfterRender: function() {
    const form = this.lookup('form');
    let post = this.getView().getPost();
    if (!post) {
      post = Ext.create('SL.model.Post');
    }
    form.loadRecord(post);
  },

  savePost: function(){
    const me = this;
    const form = this.lookup('form');
    if(!form.isValid()) return ;
    form.setLoading('მიმდინარეობს შენახვა...');
    const post = form.getForm().getRecord();
    form.updateRecord(post);
    post.save({
      success: function() {
        Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
        me.getView().close();
      },
      failure: function() {
        Ext.Msg.alert('შეცდომა', 'ერრორი');
        form.setLoading(false);
      }
    });
  },

  editForm: function() {
    this.getViewModel().set('editable', true);
  },

  handleUserChange: function() {
    this.lookup('form').getForm().setValues({
      title: '',
      body: ''
    });
  }
});
