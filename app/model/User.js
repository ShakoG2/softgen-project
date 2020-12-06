Ext.define('SL.model.User', {
  extend: 'Ext.data.Model',
  fields: ['id', 'name', 'username', 'email', 'address'],
  validators: {
    username: 'presence',
    email: 'presence'
  },
  proxy: {
    url: 'https://jsonplaceholder.typicode.com/users',
    type: 'rest',
    writer: {
      writeRecordId: false,
      writeAllFields: true
    }
  }
});
