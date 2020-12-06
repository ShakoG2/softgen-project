Ext.define("SL.view.registration.InformationWindow",{
    extend:"Ext.window.Window",
    title:"კლიენტის ინფორმაცია",
    xtype:"information",
    modal:true,
    controller:{
        xclass:"SL.view.registration.InformationWindowController"
    },
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    width:500,
    height:700,
    items:[{
        xtype:"form",
        border:false,
        reference:"form",
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false,
            margin:"30 0 0 0 "
        },
        defaultType:"displayfield",
        items:[{
            text: 'ID',
            name: 'id',
            fieldLabel:"ID",
            hidden:true,
        }, {
            text: 'კლიენტის ტიპი',
            name: 'type',
            fieldLabel:"კლიენტის ტიპი",
            renderer:function (val){
                if(val==="INDIVIDUAL") return "ფიზიკური პირი";
                      else return "იურიდიული პირი";
                // console.log(val);
                // const field = this;
                // if(!val) return '';
                // const ok=field.up("information")
                // const customerTypes=ok.getController().getStore("customerTypes");
                // const customerTypesRec=customerTypes.getById();
                //
                // if(!customerTypesRec) return val;
                // return customerTypes.get("name");
            },
        }, {
            text: 'დასახელება',
            name: 'fullName',
            fieldLabel:"დასახელება",
        }, {
            text: 'საიდ. ნომერი',
            name: 'identity',
            fieldLabel:"საიდ.ნომერი",
        }, {
            text: 'რეგიონი',
            fieldLabel:"რეგიონი",
            name: 'region',
            renderer:function (val){
                const field = this;
                if(!val) return '';
                const ok=field.up("information")
                const region=ok.getController().getStore("regions");
                const regionRec=region.getById(val);

                if(!regionRec) return val;
                return regionRec.get("name");
            },
        }, {
            text: 'რაიონი',
            name: 'district',

            renderer:function (val){
                const field = this;
                if(!val) return '';
                const ok=field.up("information")
                const region=ok.getController().getStore("regions");
                const regionRec=region.getById(val);

                if(!regionRec) return val;
                return regionRec.get("name");
            },
        }, {
            text: 'დაბადების თარიღი',
            name: 'birthDate',
            format: 'd.m.Y',
            fieldLabel:"დაბადების თარიღი",
        },{
            margin:"15 0 0 0 ",
            border:false,
            xtype:"grid",
            bind:{
                store:"{relations}",
            },
            title:"კავშირები",
            columns: [{
                text: 'ID',
                dataIndex: 'id',
                width: 100,
                hidden: true,
            }, {
                text: 'კავშირის ტიპი',
                dataIndex: 'type',
                flex: 1,
                renderer: function (val){
                    const field = this;
                    if(!val) return '';
                    const ok=field.up("information")
                    const relations=ok.getController().getStore("relationTypes");
                    const typeRec=relations.getById(val);

                    if(!typeRec) return val;
                    return typeRec.get("name");
                },
            }, {
                text: 'სახელი',
                dataIndex: 'firstName',
                flex: 1,
            }, {
                text: 'გვარი',
                dataIndex: 'lastName', //fsdfsdfsdfdsfds
                flex: 1,
            }]
        }]
    }]
})