Ext.define('SL.model.Comment', {
  extend: 'Ext.data.Model',
  fields: ['id', 'postId', 'name', 'email', 'body'],
  proxy: {
    type: 'rest',
    url: 'https://jsonplaceholder.typicode.com/comments'
  }
});
