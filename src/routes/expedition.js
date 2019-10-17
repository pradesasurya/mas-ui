module.exports = [
    {
        route: '/expedition/purchasing-to-verification',
        name: 'purchasing-to-verification',
        moduleId: './modules/expedition/purchasing-to-verification/index',
        nav: true,
        title: 'Ekspedisi Penyerahan ke Verifikasi',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1,"P2": 1,"P3": 1,"P4": 1,"P5": 1,"P6": 1,"P7": 1,"PI": 1,"PG": 1,"PK": 1, "C9": 1},
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/expedition/purchasing-document-acceptance',
        name: 'purchasing-document-acceptance',
        moduleId: './modules/expedition/purchasing-document-acceptance/index',
        nav: true,
        title: 'Penerimaan Dokumen Pembelian',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1,"B9": 1, "C9": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/expedition/reports/unit-payment-order-expedition',
        name: 'unit-payment-order-expedition',
        moduleId: './modules/expedition/reports/unit-payment-order-expedition/index',
        nav: true,
        title: 'Laporan Ekspedisi Surat Perintah Bayar',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1,"P2": 1,"P3": 1,"P4": 1,"P5": 1,"P6": 1,"P7": 1,"PI": 1,"PG": 1,"PK": 1, "C5": 1, "C9": 1 , "B4": 1, "B9": 1},
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/verification/unit-payment-order-verification',
        name: 'purchasing-document-expedition',
        moduleId: './modules/verification/unit-payment-order-verification/index',
        nav: true,
        title: 'Verifikasi Surat Perintah Bayar',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "C5": 1, "C9": 1 , "B9": 1},
            iconClass: 'fa fa-calendar-check-o'
        }
    },
    {
        route: 'unit-payment-order-not-verified-report',
        name: 'unit-payment-order-not-verified-report',
        moduleId: './modules/expedition/reports/unit-payment-order-not-verified-report/index',
        nav: true,
        title: 'Laporan SPB Not Verified',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'unit-payment-order-not-verified-history-report',
        name: 'unit-payment-order-not-verified-history-report',
        moduleId: './modules/expedition/reports/unit-payment-order-not-verified-history-report/index',
        nav: true,
        title: 'Histori SPB Not Verified',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/purchasing-disposition-expedition',
        name: 'purchasing-disposition-expedition',
        moduleId: './modules/expedition/purchasing-disposition-expedition/index',
        nav: true,
        title: 'Penyerahan Dokumen Disposisi Pembayaran ke Verifikasi',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/purchasing-disposition-acceptance',
        name: 'purchasing-disposition-acceptance',
        moduleId: './modules/expedition/purchasing-disposition-acceptance/index',
        nav: true,
        title: 'Penerimaan Dokumen Disposisi Pembayaran',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "B9": 1, "C9": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/verification/disposition-verification',
        name: 'disposition-verification',
        moduleId: './modules/verification/disposition-verification/index',
        nav: true,
        title: 'Verifikasi Disposisi',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "C5": 1, "B9": 1, "C9": 1 },
            iconClass: 'fa fa-calendar-check-o'
        }
    },
    {
        route: '/expedition/reports/purchasing-disposition-expedition',
        name: 'purchasing-disposition-expedition',
        moduleId: './modules/expedition/reports/purchasing-disposition-expedition/index',
        nav: true,
        title: 'Laporan Ekspedisi Disposisi Pembayaran',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "B4": 1, "C5": 1, "C9": 1 ,"B1": 1},
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/expedition/payment-disposition-note',
        name: 'payment-disposition-note',
        moduleId: './modules/expedition/payment-disposition-note/index',
        nav: true,
        title: 'Bukti Pembayaran Disposisi',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "C5": 1, "C9": 1,"B1": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: 'payment-disposition-not-verified-report',
        name: 'payment-disposition-not-verified-report',
        moduleId: './modules/expedition/reports/payment-disposition-not-verified-report/index',
        nav: true,
        title: 'Laporan Disposisi Not Verified',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'payment-disposition-not-verified-history-report',
        name: 'payment-disposition-not-verified-history-report',
        moduleId: './modules/expedition/reports/payment-disposition-not-verified-history-report/index',
        nav: true,
        title: 'Histori Disposisi Not Verified',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/bank-expenditure-note',
        name: 'purchasing-document-expedition',
        moduleId: './modules/expedition/bank-expenditure-note/index',
        nav: true,
        title: 'Bukti Pengeluaran Bank DPP + PPN',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calendar-check-o'
        }
    },
    {
        route: '/expedition/reports/bank-expenditure-note-dpp-ppn',
        name: 'bank-expenditure-note',
        moduleId: './modules/expedition/reports/bank-expenditure-note-dpp-ppn/index',
        nav: true,
        title: 'Laporan Bukti Pengeluaran Bank DPP + PPN',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-clone'
        }
    },
    {
        route: '/expedition/daily-bank-transaction-document-in',
        name: 'daily-bank-transaction-document-in',
        moduleId: './modules/expedition/daily-bank-transaction-document-in/index',
        nav: true,
        title: 'Transaksi Harian Bank Masuk',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1, "B4": 1,"B1": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/daily-bank-transaction-document-out',
        name: 'daily-bank-transaction-document-out',
        moduleId: './modules/expedition/daily-bank-transaction-document-out/index',
        nav: true,
        title: 'Transaksi Harian Bank Keluar',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1 ,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/reports/daily-bank-mutation-document',
        name: 'daily-bank-mutation-report',
        moduleId: './modules/expedition/reports/daily-bank-mutation-report/index',
        nav: true,
        title: 'Laporan Mutasi Bank',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/reports/daily-account-balance',
        name: 'daily-account-balance',
        moduleId: './modules/expedition/reports/daily-account-balance/index',
        nav: true,
        title: 'Laporan Saldo Bank Harian',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/pph-bank-expenditure-note',
        name: 'pph-bank-expenditure-note',
        moduleId: './modules/expedition/pph-bank-expenditure-note/index',
        nav: true,
        title: 'Pengajuan Pembayaran PPH',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "C5": 1, "C9": 1, "B1": 1},
            iconClass: 'fa fa-calendar-check-o'
        }
    },
    {
        route: '/expedition/reports/pph-bank-expenditure-note',
        name: 'pph-bank-expenditure-note',
        moduleId: './modules/expedition/reports/pph-bank-expenditure-note/index',
        nav: true,
        title: 'Laporan Bukti Pengeluaran Bank PPH',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "B4": 1, "C5": 1, "C9": 1 , "B1": 1},
            iconClass: 'fa fa-calendar-check-o'
        }
    },
    {
        route: '/expedition/reports/credit-balance',
        name: 'credit-balance-report',
        moduleId: './modules/expedition/reports/credit-balance-report/index',
        nav: true,
        title: 'Saldo Hutang',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/expedition/reports/creditor-account',
        name: 'creditor-account-report',
        moduleId: './modules/expedition/reports/creditor-account-report/index',
        nav: true,
        title: 'Kartu Hutang',
        auth: true,
        settings: {
            group: "finance",
            //permission: { "P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PI": 1, "PG": 1, "PK": 1, "B9": 1, "C9": 1 , "B4": 1,"B1": 1},
            iconClass: 'fa fa-dashboard'
        }
    },
];
