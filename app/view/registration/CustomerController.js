Ext.define('SL.view.registration.CustomerController', {
  extend: 'Ext.app.ViewController',

  changeRegion: function() {
    const values = this.lookup('form').getValues();
    const store = this.getViewModel().getStore('districts');
    store.clearFilter();
    // store.removeAll();
    // store.sync();
    store.filterBy(function(rec) {
      return rec.get('region_id') === values.region;
    });
  },

  save: function() {
    const me = this;
    const form = this.lookup('form');
    if (!form.isValid()) return ;

    const customers = this.getViewModel().getStore('customers');
    const relations = this.getViewModel().getStore('relations');
    const newCustomer = Ext.create('SL.model.Customer');
    form.updateRecord(newCustomer);

    newCustomer.set('relations', this.getDataFromStore(relations));

    newCustomer.save({
      success: function() {
        Ext.Msg.alert('სტატუსი', 'მონაცემები წარმატებით შეინახა');
        customers.load();
        me.reset();
      },
      failure: function() {
        Ext.Msg.alert('სტატუსი', 'შეცდომა');

      },
    });
  },
  reset: function() {
    const relations = this.getViewModel().getStore('relations');
    const form = this.lookup('form');
    form.getForm().reset();
    relations.removeAll();
  },

  customerTypeRenderer: function(id) {
    const customerType = this.getViewModel().getStore('customerTypes').getById(id);
    return customerType.get('type');
  },
  regionNameRenderer: function(id) {
    const region = this.getViewModel().getStore('regions').getById(id);
    return region.get('name');
  },
  districtNameRenderer: function(id) {
    const district = this.getViewModel().getStore('districts').getById(id);
    return district.get('name');
  },
  orgTypeRenderer: function(id) {
    const orgType = this.getViewModel().getStore('orgTypes').getById(id);
    return orgType.get('name');
  },

  addRelation: function() {
    const relations = this.getViewModel().getStore('relations');
    relations.add({});
    const relationsGrid = this.lookup('relationsGrid');
    relationsGrid.editingPlugin.startEdit(relations.getCount() - 1, 1);
  },

  relationTypeRenderer: function(relationTypeId) {
    if (!relationTypeId) return relationTypeId;

    const relationTypes = this.getViewModel().getStore('relationTypes');
    const relation = relationTypes.getById(relationTypeId);

    if (!relation) return relationTypeId;

    return relation.get('name');
  },

  getDataFromStore: function(store) {
    return store.getRange().map(rec => rec.getData());
  },
  informationWindow:function (view,record){
    this.getViewModel().set('customerData', record);
    let win = this.getView().add({
      xclass:'SL.view.registration.InformationWindow',
      autoShow: false,
    });
    win.show();
    const customersStore=this.getViewModel().getStore("customers");
    const relationsStore=this.getViewModel().getStore("relations");
    const data=record.get("relations");
    console.log(data);
    relationsStore.loadData(data);

  },
});
