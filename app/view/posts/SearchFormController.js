Ext.define('SL.view.posts.SearchFormController', {
  extend: 'Ext.app.ViewController',

  search: function() {
    const form = this.getView();
    const values = form.getForm().getValues();
    const store = this.getViewModel().getStore('posts');

    for(let v in values) {
      if(!values[v]) {
        delete values[v]
      }
    }
    store.load({
      params: values
    });
  },

  resetForm: function() {
    this.getView().getForm().reset();
    this.search();
  }
});
