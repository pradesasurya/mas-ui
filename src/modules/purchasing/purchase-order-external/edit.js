import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';


@inject(Router, Service)
export class Edit {
    hasCancel = true;
    hasSave = true;
    hasView = false;

    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    bind() {
        this.error = {};
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
    }

    cancel(event) {
        this.router.navigateToRoute('view', { id: this.data._id });
    }

    save(event) {
        if(this.data.items){
            for(var item of this.data.items){
                if(!item.poId || item.poId==0){
                    item.poId= item._id ? item._id : item.Id;
                    delete item._id;
                    delete item.Id;
                    if(item.details)
                        for(var detail of item.details){
                            detail.poItemId= detail._id ? detail._id : detail.Id;
                            delete detail._id;
                            delete detail.Id;
                        }
                }
            }
        }
        var test=false;
        for(var item of this.data.items){
            for(var detail of item.details){
                if(isNaN(detail.pricePerDealUnit)){
                    test=true;
                }
            }
        }
        if(test==true){
            alert("Harga Barang Harus Diisi Dengan Angka");
        } else {
           this.service.update(this.data).then(result => {
                this.cancel();
            }).catch(e => {
                this.error = e;
            })
        }
    }
}

