Ext.define('SL.view.registration.CustomerForm', {
  extend: 'Ext.form.Panel',
  border: false,
  bodyPadding: 20,
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  fieldDefaults: {
    anchor: '100%',
    labelAlign: 'top',
  },
  items: [{
    xtype: 'container',
    layout: 'hbox',
    defaultType: 'fieldset',
    defaults: {
      border: false,
      flex: 1
    },
    items: [{
      items: [{
        xtype: 'combo',
        fieldLabel: 'კლიენტის ტიპი',
        reference: 'type',
        name: 'type',
        emptyText: 'კლიენტის ტიპი',
        typeAhead: true,
        queryMode: 'local',
        forceSelection: true,
        valueField: 'id',
        displayField: 'type',
        value: 'INDIVIDUAL',
        publishes: [
          'value'
        ],
        bind: {
          store: '{customerTypes}'
        }

      }, {
        xtype: 'textfield',
        reference: 'firstName',
        name: 'firstName',
        fieldLabel: 'სახელი',
        allowBlank: false,
        regex: /^[a-zA-Zა-ჰ]+$/,
        bind: {
          hidden: '{!individualIsActive}',
          disabled: '{!individualIsActive}'
        },


      }, {
        xtype: 'combo',
        fieldLabel: 'სამართლებრივი ფორმა',
        allowBlank: false,
        reference: 'orgType',
        name: 'orgType',
        queryMode: 'local',
        valueField: 'id',
        displayField: 'name',
        bind: {
          store: '{orgTypes}',
          hidden: '{individualIsActive}',
          disabled: '{individualIsActive}'
        }

      }, {
        xtype: 'textfield',
        reference: 'lastName',
        name: 'lastName',
        fieldLabel: 'გვარი',
        regex: /^[a-zA-Zა-ჰ]+$/,
        allowBlank: false,
        bind: {
          hidden: '{!individualIsActive}',
          disabled: '{!individualIsActive}'
        },


      }, {
        xtype: 'textfield',
        reference: 'name',
        name: 'name',
        fieldLabel: 'დასახელება',
        regex: /^[a-zA-Zა-ჰ]+$/,
        allowBlank: false,
        bind: {
          hidden: '{individualIsActive}',
          disabled: '{individualIsActive}'
        },

      },]
    }, {
      items: [{
        xtype: 'textfield',
        reference: 'privateNumber',
        name: 'privateNumber',
        allowBlank: false,
        maskRe: /\d/,
        regex: /^[0-9]{11}$/,
        fieldLabel: 'პირადი ნომერი',
        bind: {
          hidden: '{!individualIsActive}',
          disabled: '{!individualIsActive}'
        }

      }, {
        xtype: 'textfield',
        reference: 'idNumber',
        name: 'idNumber',
        allowBlank: false,
        regex: /^[0-9]{9}$/,
        maskRe: /\d/,
        maxLength: 9,
        fieldLabel: 'საიდენტიფიკაციო ნომერი',
        bind: {
          hidden: '{individualIsActive}',
          disabled: '{individualIsActive}'
        },
      }, {
        xtype: 'datefield',
        fieldLabel: 'დაბადების თარიღი',
        name: 'birthDate',
        allowBlank: false,
        format: 'd.m.Y'
      }]
    }, {
      items: [{
        xtype: 'combo',
        fieldLabel: 'რეგიონი',
        reference: 'region',
        name: 'region',
        allowBlank: false,
        valueField: 'id',
        displayField: 'name',
        forceSelection: true,
        queryMode: 'local',
        bind: {
          store: '{regions}'
        },
        listeners: {
          change: 'changeRegion'
        },
      }, {
        xtype: 'combo',
        fieldLabel: 'რაიონი',
        reference: 'district',
        name: 'district',
        valueField: 'id',
        displayField: 'name',
        allowBlank: false,
        forceSelection: true,
        queryMode: 'local',
        bind: {
          store: '{districts}',
          disabled: '{!region.selection}'
        }
      }]
    }, {
    }],
  }, {
    xclass: 'SL.view.registration.RelationsGrid',
    reference: 'relationsGrid',
    title: 'კავშირები',
    height: 300,
  }],
  buttons: [{
    text: 'გასუფთავება',
    handler: 'reset',
    scale: 'medium'
  }, {
    text: 'შენახვა',
    handler: 'save',
    scale: 'medium'
  }]
})
