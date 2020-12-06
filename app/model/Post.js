Ext.define('SL.model.Post', {
  extend: 'Ext.data.Model',
  fields: ['id', 'userId', 'title', 'body', {
    name: 'publishDate',
    convert: function(v, rec) {
      return new Date()
    }
  }],
  validators: {
    userId: 'present'
  },
  proxy: {
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'rest',
    writer: {
      writeRecordId: false,
      writeAllFields: true
    }
  }
});
