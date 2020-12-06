Ext.define('SL.model.Customer', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id',
    type: 'number',
  }, {
    name: 'type',
    type: 'string',
  }, {
    name: 'lastName',
    type: 'string',
  }, {
    name: 'firstName',
    type: 'string',
  }, {
    name: 'name',
    type: 'string',
  }, {
    name: 'orgType',
    type: 'number',
  }, {
    name: 'privateNumber',
    type: 'string',
  }, {
    name: 'idNumber',
    type: 'string',
  }, {
    name: 'region',
    type: 'number',
  }, {
    name: 'district',
    type: 'number',
  }, {
    type: 'date',
    name: 'birthDate',
    dateFormat: 'd.m.Y',
  }, 'relations', {
    name: 'fullName',
    calculate: function(record) {
      if (record.type === 'INDIVIDUAL') {
        return `${record.firstName} ${record.lastName}`;
      } else {
        return `${record.orgType} ${record.name}`;
      }
    },
  }, {
    name: 'identity',
    calculate: function(record) {
      if (record.type === 'INDIVIDUAL') {
        return record.privateNumber;
      } else {
        return record.idNumber;
      }
    },
  }],

  proxy: {
    url: 'https://softlab-api.softgen.ge/vano/customers',
    type: 'rest',
    writer: {
      // writeAllFields: true,
      writeRecordId: false,
    },
  },

});
