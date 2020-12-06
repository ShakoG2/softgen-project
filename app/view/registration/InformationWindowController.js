Ext.define("SL.view.registration.InformationWindowController",{
    extend:"Ext.app.ViewController",
    afterRender:function (){
        const form=this.lookup("form");
        // const vaxlues=form.getForm().getValues();
        const record=this.getViewModel().get("customerData");
        form.loadRecord(record);

    },
    // regionNameRenderer:function (regionId){
    //     if(!regionId) return regionId;
    //     const region=this.getViewModel().getStore("regions");
    //     const regionName=region.getById(regionId);
    //
    //     if(!regionName) return regionId;
    //     return regionName.get("name");
    //
    // }
})