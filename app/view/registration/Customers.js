Ext.define('SL.view.registration.Customers', {
    extend: 'Ext.panel.Panel',

    controller: {
        xclass: 'SL.view.registration.CustomerController',
    },
    viewModel: {
        xclass: 'SL.view.registration.CustomerViewModel'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xclass: 'SL.view.registration.CustomerForm',
        reference: 'form',
    }, {
        xclass: 'SL.view.registration.CustomerGrid',
        flex: 1,
    }]

})
