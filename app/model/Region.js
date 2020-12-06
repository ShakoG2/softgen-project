Ext.define('SL.model.Region',{
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    proxy: {
        url: 'https://softlab-api.softgen.ge/regions',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }
})
