import { inject } from 'aurelia-framework';
import Service from './service';
import { Router } from 'aurelia-router';
import moment from 'moment';
import numeral from 'numeral';

@inject(Router, Service)
export class List {
    context = ['Rincian', 'Cetak PDF'];

    columns = [
        { field: 'PaymentDispositionNo', title: 'No Bukti Pembayaran Disposisi' },
        {
            field: 'PaymentDate', title: 'Tanggal Pembayaran', formatter: function (value, data, index) {
                return moment(value).format('DD MMM YYYY');
            },
        },
        { field: 'dispositions', title: 'No Disposisi Pembayaran' },
        { field: 'Supplier.Name', title: 'Supplier' },
        {
            field: 'BankName', title: 'Bank', formatter: function (value, data, index) {
                return data ? `${data.AccountBank.BankName}` : '';
            }
        },
        { field: 'AccountBank.Currency.Code', title: 'Mata Uang' },
        {
            field: 'Amount', title: 'Amount', formatter: function (value, data, index) {
                return numeral(value).format('0,000.00');
            },
        },
        { field: 'paymentDueDates', title: 'Tanggal Jatuh Tempo'}
    ];

    constructor(router, service) {
        this.service = service;
        this.router = router;
    }

    loader = (info) => {
        let order = {};
        if (info.sort)
            order[info.sort] = info.order;
        let arg = {
            page: parseInt(info.offset / info.limit, 10) + 1,
            size: info.limit,
            keyword: info.search,
            order: order,
        };

        return this.service.search(arg)
            .then(result => {
                if (result.data && result.data.length > 0) {
                    result.data = result.data.map((datum) => {
                        let listDispo = [];
                        let listDueDate = [];

                        for (let item of datum.Items) {
                            let existDispo = listDispo.find((disposisi) => disposisi == '- ' + item.dispositionNo);
                            if (!existDispo) {
                                listDispo.push('- ' + item.dispositionNo);
                            }

                            let existDueDate = listDueDate.find((dueDate) => dueDate == '- ' + moment(item.paymentDueDate).format('DD MMM YYYY'));
                            if (!existDueDate) {
                                listDueDate.push('- ' + moment(item.paymentDueDate).format('DD MMM YYYY'));
                            }
                        }

                        datum.dispositions = listDispo.join('\n');
                        datum.paymentDueDates = listDueDate.join('\n');

                        return datum;
                    })
                }
                

                return {
                    total: result.total,
                    data: result.data
                }
            });
    }

    contextClickCallback(event) {
        let arg = event.detail;
        let data = arg.data;

        switch (arg.name) {
            case 'Rincian':
                this.router.navigateToRoute('view', { id: data.Id });
                break;
            case "Cetak PDF":
                this.service.getPdfById(data.Id);
                break;
        }
    }

    create() {
        this.router.navigateToRoute('create');
    }
}