Ext.define('SL.model.District',{
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'region_id'],
    proxy: {
        url: 'https://softlab-api.softgen.ge/districts',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})
