Ext.define('SL.view.registration.CustomerGrid', {
  extend: 'Ext.grid.Panel',
  bind: {
    store: '{customers}',
  },
  columns: [{
    text: 'ID',
    dataIndex: 'id',
  }, {
    text: 'კლიენტის ტიპი',
    dataIndex: 'type',
    flex: 1,
    renderer: 'customerTypeRenderer',
  }, {
    text: 'დასახელება',
    dataIndex: 'fullName',
    flex: 1,
    // renderer: 'orgTypeRenderer'
  }, {
    text: 'საიდ. ნომერი',
    dataIndex: 'identity',
    flex: 1,
  }, {
    text: 'რეგიონი',
    dataIndex: 'region',
    flex: 1,
    renderer: 'regionNameRenderer',
  }, {
    text: 'რაიონი',
    dataIndex: 'district',
    flex: 1,
    renderer: 'districtNameRenderer',
  }, {
    xtype: 'datecolumn',
    text: 'დაბადების თარიღი',
    dataIndex: 'birthDate',
    flex: 1,
    format: 'Y-m-d H:i:s'
  }],
  listeners:{
    itemdblclick: "informationWindow"
  }
});
