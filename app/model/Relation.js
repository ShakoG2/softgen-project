Ext.define('SL.model.Relation', {
  extend: 'Ext.data.Model',
  fields: ['firstName', 'lastName', {
    name: 'id',
    type: 'integer'
  }, {
    name: 'type',
    type: 'integer',
    allowNull: true,
  }, {
    name: 'birthDate',
    type: 'date',
    dateFormat: 'C',
  }],
  validators: {
    type: 'presence',
    firstName: 'presence',
    lastName: 'presence',
  },
});
