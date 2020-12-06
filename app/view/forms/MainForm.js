Ext.define('SL.view.forms.MainForm', {
  extend: 'Ext.panel.Panel',
  controller: {
    search: function() {
      const form = this.lookup('form');
      const values = form.getForm().getValues();

      console.log(values);
      if(!form.isValid()) {
        Ext.Msg.alert('შეცდომა', 'ფორმა არ არის ვალიდური');
      }
    }
  },
  viewModel: {
    data: {
      title: 'default',
    },
    formulas: {
      birthDate: function (get) {
        if(get('year.value') && get('month.value') && get('day.value')) {
          return `${get('year.value')}-${get('month.value')}-${get('day.value')}`
        }
        return '';
      }
    },
    stores: {
      countries: {
        fields: ['id', 'name'],
        data: [{id: 1, name: 'საქართველო'}, {id: 2, name: 'ავსტრია'}]
      }
    }
  },
  items: [{
    xtype: 'form',
    border: false,
    reference: 'form',
    bodyPadding: 5,
    layout: 'hbox',
    defaults: {
      margin: 5,
      flex: 1,
      defaultType: 'textfield',
    },
    defaultType: 'fieldset',
    fieldDefaults: {
      labelAlign: 'top',
      msgTarget: 'side',
      labelWidth: 150,
      anchor: '100%'
    },
    items: [{
      bind: {
        title: '{title}'
      },
      items: [{
        name: 'title',
        fieldLabel: 'სათაური',
        reference: 'titleField',
        publishes: 'value',
        emptyText: 'title...',
        // allowBlank: false,
        // regex: /^[a-zA-Zა-ჰ0-9 ]+$/
      }, {
        name: 'email',
        fieldLabel: 'ელ ფოსტა',
        allowBlank: false,
        vtype: 'email',
        bind: {
          disabled: '{!titleField.value}'
        }
      }, {
        xtype: 'fieldcontainer',
        fieldLabel: 'დაბადების თარიღი',
        defaultType: 'numberfield',
        layout: 'hbox',
        defaults: {
          flex: 1,
          margin: '0 5 0 0',
          maxValue: 9,
          publishes: 'value',
          // validator: function(v) {
          //   return v > 10 ? 'მიუთითეთ 10 ზე ნაკლები რიცხვი' : true;
          // }
        },
        items: [{
          name: 'day',
          reference: 'day'
        }, {
          name: 'month',
          reference: 'month'
        }, {
          name: 'year',
          reference: 'year',
          margin: 0
        }]
      }, {
        xtype: 'displayfield',
        fieldLabel: 'დაბ. თარიღი',
        bind: '{year.value}-{month.value}-{day.value}'
      }, {
        xtype: 'combo',
        fieldLabel: 'დაბ. ქვეყანა',
        reference: 'countryField',
        bind: {
          store: '{countries}'
        },
        publishes: ['value', 'rawValue'],
        queryMode: 'local',
        name: 'country',
        forceSelection: true,
        valueField: 'id',
        displayField: 'name',
        filterPickList: true
      }, {
        xtype: 'displayfield',
        fieldLabel: 'არჩეული ქვეყანა',
        bind: {
          value: '{countryField.rawValue}'
        }
      }]
    },
      {
      title: 'asdfa',
      items: [{
        name: 'password',
        fieldLabel: 'პაროლი',
        inputType: 'password',
      }, {
        name: 'username',
        fieldLabel: 'მომხმარებელი'
      }, {
        name: 'asdfasf',
        fieldLabel: 'სათაური 223'
      }]
    },
      {
      title: 'asdfa',
      items: [{
        xtype: 'fieldcontainer',
        fieldLabel: 'სქესი',
        defaultType: 'radiofield',
        defaults: {
          name: 'gender',
        },
        items: [{
          value: 'male',
          inputValue: 'male',
          boxLabel: 'მამრობითი',
        }, {
          value: 'female',
          boxLabel: 'მდედრობითი'
        }]
      }, {
        xtype: 'checkbox',
        fieldLabel: 'check',
        reference: 'checkboxField',
        name: 'active',
        checked: false,
        boxLabel: 'active'
      }, {
        xtype: 'checkbox',
        name: 'active2',
        boxLabel: 'active',
        bind: {
          disabled: '{!checkboxField.checked}'
        }
      }, {
        xtype: 'checkbox',
        name: 'active3',
        boxLabel: 'active',
        bind: {
          disabled: '{!checkboxField.checked}'
        }
      }]
    }],
    buttons: [{
      text: 'search',
      handler: 'search'
    }]
  }]
});
