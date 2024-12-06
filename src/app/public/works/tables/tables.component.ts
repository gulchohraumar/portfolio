import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from "xlsx"
import * as FileSaver from 'file-saver'

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string; 
  description: string;
}

const ELEMENT_DATA: any[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    symbol2: 'He',
    symbol3: 'Li',
    symbol4: 'Be',
    symbol5: 'B',
    symbol6: 'C',
    symbol7: 'N',
    symbol8: 'O',
    date: '10-01-2023',
    isClicked: false
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    symbol2: 'H1',
    symbol3: 'H2',
    symbol4: 'H3',
    symbol5: 'H4',
    symbol6: 'H5',
    symbol7: 'H6',
    symbol8: 'H7',
    date: '03-03-2023',
    isClicked: false,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    symbol2: 'HA',
    symbol3: 'HB',
    symbol4: 'HC',
    symbol5: 'HD',
    symbol6: 'HE',
    symbol7: 'HF',
    symbol8: 'HG',
    date: '03-10-2023',
    isClicked: false,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '03-06-2023',
    isClicked: false,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '12-09-2023',
    isClicked: false,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '05-05-2023',
    isClicked: false,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '08-09-2023',
    isClicked: false,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '03-06-2023',
    isClicked: false,
  },
  {
    position: 9,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'OO',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '01-08-2023',
    isClicked: false,
  },
  {
    position: 10,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'OOO',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '03-12-2023',
    isClicked: false,
  },
  {
    position: 11,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    symbol2: 'H',
    symbol3: 'H',
    symbol4: 'H',
    symbol5: 'H',
    symbol6: 'H',
    symbol7: 'H',
    symbol8: 'H',
    date: '02-06-2023',
    isClicked: false,
  }
]

// interface PeriodicElementNormal {
//   redirectName: string;
//   position: number;
//   hyperlink: string;
//   hyperlinkName: string;
//   symbol: string;
//   link: string;
//   redirect: string;
// }

const ELEMENT_DATANormal: any[] = [
  { position: 1, redirectName: 'Modules', hyperlink: '', hyperlinkName: 'Link 1', symbol: 'H', link: 'https://www.blobmaker.app/', redirect: '/home' },
  { position: 2, redirectName: 'Tables', hyperlink: '', hyperlinkName: 'Link 2', symbol: 'He', link: 'https://neumorphism.io/#e0e0e0', redirect: '/home/tables' },
  { position: 3, redirectName: 'Charts', hyperlink: '', hyperlinkName: 'Link 3', symbol: 'Li', link: 'https://blog.hubspot.com/website/css-animation-examples', redirect: '/home/chart' },
  { position: 4, redirectName: 'Beryllium 1', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: 'https://animista.net/play/basic/shadow-drop', redirect: '' },
  { position: 5, redirectName: 'Beryllium 1', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: 'https://animista.net/play/basic/shadow-drop', redirect: '' },
  { position: 6, redirectName: 'Beryllium 1', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: 'https://animista.net/play/basic/shadow-drop', redirect: '' },
  { position: 7, redirectName: 'Beryllium 1', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: 'https://animista.net/play/basic/shadow-drop', redirect: '' },
  { position: 8, redirectName: 'Beryllium 1', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: 'https://animista.net/play/basic/shadow-drop', redirect: '' },
];

const ELEMENT_DATANormal2: any[] = [
  { position: 1, redirectName: 'Hydrogen 2', hyperlink: '', hyperlinkName: '', symbol: 'H', link: 'https://www.minimamente.com/project/magic/#google_vignette', redirect: '' },
  { position: 2, redirectName: 'Helium 2', hyperlink: '', hyperlinkName: '', symbol: 'He', link: 'http://dwarcher.github.io/reboundgen/examples/', redirect: '' },
  { position: 3, redirectName: 'Lithium 2', hyperlink: '', hyperlinkName: '', symbol: 'Li', link: '', redirect: '' },
  { position: 4, redirectName: 'Beryllium 2', hyperlink: '', hyperlinkName: '', symbol: 'Be', link: '', redirect: '' },
];




@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) { }

  firstDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  excelHeaders: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild('commonPagExcel') commonPagExcel!: MatPaginator;
  @ViewChild('firstPag') firstPaginator!: MatPaginator;

  displayedFirstDataColumns: string[] = [];
  displayedFirstColumns: string[] = [
    'Tracking No',
    'Status',
    'Countries',
    'LoadStation Name',
    'DestStation Name',
    'Cont Count',
    'Date',
    'Eta',
    'Route Id'
  ];


  displayedcommontColumns: string[] = [
    'No',
    'Firm',
    'Department',
    'Client',
    'Total',
    'Currency',
    'Contract',
    'Note',

  ];

  displayedColumns = {
    columns: [
      'orderNo',
      'opNo',
      'clientName',
      'transportationType',
      'wagonNo',
      'containerNo',
      'overhead',
      'consignor',
      'consignee',
      'checkoutDate',
      'deliveryDate',
    ],
    columnsTranslates: [
      'Sifariş №',
      'Əməliyyat №',
      'Müştəri',
      'Daşıma vasitəsi',
      'Vaqon №',
      'Konyteyner №',
      'Qaimə №',
      'Yük göndərən',
      'Yük alan',
      'Çıxma tarixi',
      'Çatma tarixi'
    ]
  };

  sum = 0;
  secondDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  secondInitialDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild('commonPag') commonPaginator!: MatPaginator;
  orderRequestData: any = {
    filters: []
  }
  filterForm!: FormGroup;
  activeRowSecond: any = -1;
  selectedIdSecond: any = 0;
  highlightRowDataSecond: any;
  pageEvent!: PageEvent;
  length?: number;
  lengthVender?: number;
  pageSize!: number;
  pageSizeOptions: number[] = [10, 15, 20];

  generateFormInputTable() {
    let model: any = {};
    this.displayedcommontColumns.map((dt: any) => {
      model[dt.replace(/ /g, '')] = '';
    })
    this.filterForm = this.fb.group(model)
  }


  excelTableForm = this.fb.group({
    routeLineId: [0],
    overhead: [''],
    wagonNo: [],
    contPrefix: [''],
    containerNo: [''],
    qnq: [''],
    qnqId: [1],
    fileName: [''],
    filePath: [''],
    checkStatus: [1]
  });

  get excelF(): { [key: string]: AbstractControl } {
    return this.excelTableForm.controls;
  }
  displayedExcelTableColumns: string[] = [
    "qaimeNo",
    "vaqonNo",
    "contPrefix",
    "containerNo",
    "fileName",
    "operation",
  ];
  excelDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild('excelTablePag') excelTablePag!: MatPaginator;
  fileName? = '';
  excelFileName? = '';
  file?: File;
  excelFile?: File;
  excelData: any;
  @ViewChild(MatSort) sort!: MatSort;

  displayedreceiptColumns: string[] = [
    "qaimeNo",
    "vaqonNo",
    'contPrefix',
    "containerNo",
    "fileName",
    // "filepath",
    "operation",
  ];
  displayBtns = false;
  openUpdateBtn = false;
  displayUpdateBtn!: number;
  displayId!: number;
  editableRowTable: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  dataInputTable: any;
  hideFile = false;
  anyForm!: FormGroup;

  generateFormEditableRow() {
    this.anyForm = this.fb.group({
      lines: this.fb.array([])
    })
  }

  filltable() {
    this.dataInputTable = [
      {
        contPrefix: "ADYU",
        containerId: 0,
        containerNo: "1922245",
        fileId: -1,
        filePath: null,
        overhead: "597247",
        qnq: "",
        routeId: 8,
        routeLineId: 1602,
        wagonId: 0,
        wagonNo: 94302924,
        selectedFileName: ""
      },
      {
        contPrefix: "ADYU",
        containerId: 0,
        containerNo: "3233",
        fileId: -1,
        filePath: null,
        overhead: "453423",
        qnq: "",
        routeId: 8,
        routeLineId: 1602,
        wagonId: 0,
        wagonNo: 94302924,
        selectedFileName: ""
      },
      {
        contPrefix: "ADYU",
        containerId: 0,
        containerNo: "5555",
        fileId: -1,
        filePath: null,
        overhead: "",
        qnq: "",
        routeId: 8,
        routeLineId: 1602,
        wagonId: 0,
        wagonNo: 94302924,
        selectedFileName: ""
      },
    ]

    // this.generateFormEditableRow();
    this.editableRowTable = new MatTableDataSource<any>(this.dataInputTable);
    this.onHandleApiData(this.dataInputTable);
  }


  onHandleApiData(fromApiResponse: Array<any>) {
    fromApiResponse.forEach((response: any) => {
      let frmArry = this.onDataSetFormArray(
        {
          routeLineId: response.routeLineId,
          contPrefix: response.contPrefix,
          containerNo: response.containerNo,
          fileName: response.fileName,
          fileId: response.fileId,
          overhead: response.overhead,
          wagonNo: response.wagonNo
        });
      this.addLinesValue(frmArry)
    });
  }

  onDataSetFormArray(model: any) {
    return this.fb.group({
      routeLineId: [model.routeLineId],
      overhead: [model.overhead],
      wagonNo: [model.wagonNo],
      contPrefix: [model.contPrefix],
      containerNo: [model.containerNo],
      fileName: [model.fileName],
      fileId: [model.fileId]
    });
  }

  get lines() {
    return this.anyForm.get("lines") as FormArray
  }
  addLinesValue(frmArr: any) {
    this.lines.push(frmArr);
  }


  //expandable table
  dataSourceExpandable: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  initialDataSourceExpandable: MatTableDataSource<any> = new MatTableDataSource<any>(ELEMENT_DATA);
  columnsToDisplayExpandable = ['name', 'weight', 'symbol', 'position', 'symbol2', 'symbol3', 'symbol5', 'symbol6', 'symbol7', 'symbol8', 'date'];
  columnsToDisplayWithExpand: any[] = [];
  menuColumnsList: any[] = []; // menuda gostermek ucun
  modelColumns: any[] = [];
  modulModel: any[] = [];// localstorage yazib istifade etmek ucun

  @ViewChild('empTbSortExpandable') empTbSortExpandable = new MatSort();
  @ViewChild('empTbSortWithObjectExpandable') empTbSortWithObjectExpandable = new MatSort();

  initialColumnsToDisplayWithExpand: any[] = [];
  expandedElementExpandable!: PeriodicElement | null;

  filterFormExpandable!: FormGroup;
  orderRequestDataExpandable: any = {
    filters: []
  }

  dataArray: any[] = [];
  totals: number = 0;
  totalsArray: any[] = [];

  expandedElements: any[] = [];
  displayedColumnsExpandable: string[] = ['position', 'name', 'weight', 'symbol', 'symbol2', 'symbol3', 'symbol4', 'symbol5', 'symbol6', 'symbol7', 'symbol8'];
  dataSourceNormal: any;

  isFilter = false;
  isFiles = false;
  isFilesClick = false;

  isDirectionRotate = false;

  pageEventExpandable!: PageEvent;
  lengthExpandable?: number;
  lengthVenderExpandable?: number;
  pageSizeExpandable!: number;
  pageSizeOptionsExpandable: number[] = [5, 10, 15, 20];
  @ViewChild('commonPagExpandable') commonPaginatorExpandable!: MatPaginator;

  lengthHeader?: number;
  pageSizeHeader!: number; 
  pageSizeOptionsHeader: number[] = [5, 10, 15,20];

  ngOnInit() {

    this.generateFormEditableRow();
    this.filltable();
    this.generateFormInputTable();

    this.excelHeaders = new MatTableDataSource<any>([
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
      {

        orderNo: '2023-03223',
        opNo: '2',
        clientName: 'ABSHERON mmc',
        transportationType: 'Vaqon',
        wagonNo: '132323',
        containerNo: '',
        overhead: '2342423',
        consignor: 'azerbaijan',
        consignee: 'turkey',
        checkoutDate: '2023-02-13',
        deliveryDate: '2024-03-23',
      },
    ])
    this.lengthHeader = this.excelHeaders.data.length;
    this.excelHeaders.paginator = this.commonPagExcel;


    this.firstDataSource = new MatTableDataSource<any>([
      {
        Color: " #007bff",
        ContCount: 7,
        Countries: "Turkey / Kyrgyzstan",
        Date: "2022-07-27",
        DestCode: "kg",
        DestCountry: "Kyrgyzstan",
        DestCountryId: 122,
        DestStationId: 6358,
        DestStationName: "72222 - Ош",
        Eta: "10 d 2 h",
        LoadCode: "tr",
        LoadCountry: "Turkey",
        LoadCountryId: 231,
        LoadStationId: -1,
        LoadStationName: "Biherova 0344-6",
        RouteId: 61,
        Status: "Loaded",
        TrackingNo: "2207-0034",
      },
      {
        Color: " #007bff",
        ContCount: 7,
        Countries: "Turkey / Kyrgyzstan",
        Date: "2022-07-27",
        DestCode: "kg",
        DestCountry: "Kyrgyzstan",
        DestCountryId: 122,
        DestStationId: 6358,
        DestStationName: "72222 - Ош",
        Eta: "10 d 2 h",
        LoadCode: "tr",
        LoadCountry: "Turkey",
        LoadCountryId: 231,
        LoadStationId: -1,
        LoadStationName: "Biherova 0344-6",
        RouteId: 61,
        Status: "Loaded",
        TrackingNo: "2207-0034",
      },
      {
        Color: " #007bff",
        ContCount: 7,
        Countries: "Turkey / Kyrgyzstan",
        Date: "2022-07-27",
        DestCode: "kg",
        DestCountry: "Kyrgyzstan",
        DestCountryId: 122,
        DestStationId: 6358,
        DestStationName: "72222 - Ош",
        Eta: "10 d 2 h",
        LoadCode: "tr",
        LoadCountry: "Turkey",
        LoadCountryId: 231,
        LoadStationId: -1,
        LoadStationName: "Biherova 0344-6",
        RouteId: 61,
        Status: "Loaded",
        TrackingNo: "2207-0034",
      },
      {
        Color: " #007bff",
        ContCount: 7,
        Countries: "Turkey / Kyrgyzstan",
        Date: "2022-07-27",
        DestCode: "kg",
        DestCountry: "Kyrgyzstan",
        DestCountryId: 122,
        DestStationId: 6358,
        DestStationName: "72222 - Ош",
        Eta: "10 d 2 h",
        LoadCode: "tr",
        LoadCountry: "Turkey",
        LoadCountryId: 231,
        LoadStationId: -1,
        LoadStationName: "Biherova 0344-6",
        RouteId: 61,
        Status: "Loaded",
        TrackingNo: "2207-0034",
      },

    ])
    this.firstDataSource.paginator = this.firstPaginator;


    this.secondInitialDataSource  = new MatTableDataSource<any>([
      {
        No: '1',
        Firm: 'Alliance',
        Department: 'Back-end',
        Client: 'Rashid LLC',
        Total: '23',
        Currency: 'USD',
        Contract: 'test 2',
        Note: 'Lorem ipsum.',
      },
      {
        No: '2',
        Firm: 'Absheron Express',
        Department: 'Front-end',
        Client: 'Gulchohra LLC',
        Total: '12',
        Currency: 'USD',
        Contract: 'test',
        Note: 'Lorem ipsum.',
      },
      {
        No: '3',
        Firm: 'Sara Logistics',
        Department: 'Back-end',
        Client: 'Shahin LLC',
        Total: '55',
        Currency: 'EUR',
        Contract: 'test 3',
        Note: 'Lorem ipsum.',
      },
      {
        No: '3',
        Firm: 'Sara Logistics',
        Department: 'Back-end',
        Client: 'Jalal LLC',
        Total: '12',
        Currency: 'EUR',
        Contract: 'test 4',
        Note: 'Lorem ipsum.Lorem ipsum.',
      },

    ]);

    this.secondDataSource = new MatTableDataSource<any>([
      {
        No: '1',
        Firm: 'Alliance',
        Department: 'Back-end',
        Client: 'Rashid LLC',
        Total: '23',
        Currency: 'USD',
        Contract: 'test 2',
        Note: 'Lorem ipsum.',
      },
      {
        No: '2',
        Firm: 'Absheron Express',
        Department: 'Front-end',
        Client: 'Gulchohra LLC',
        Total: '12',
        Currency: 'USD',
        Contract: 'test',
        Note: 'Lorem ipsum.',
      },
      {
        No: '3',
        Firm: 'Sara Logistics',
        Department: 'Back-end',
        Client: 'Shahin LLC',
        Total: '55',
        Currency: 'EUR',
        Contract: 'test 3',
        Note: 'Lorem ipsum.',
      },
      {
        No: '3',
        Firm: 'Sara Logistics',
        Department: 'Back-end',
        Client: 'Jalal LLC',
        Total: '12',
        Currency: 'EUR',
        Contract: 'test 4',
        Note: 'Lorem ipsum.Lorem ipsum.',
      },

    ]);
    this.secondDataSource.paginator = this.commonPaginator;
    this.calculateTable();



    //EXAPNDABLE TABLE

    this.dataSourceExpandable = new MatTableDataSource<any>(ELEMENT_DATA)
    this.initialDataSourceExpandable = new MatTableDataSource<any>(this.dataSourceExpandable.data);

    let dtArr = ['expand', ...this.columnsToDisplayExpandable]

    dtArr.map((dt: any) => {
      this.initialColumnsToDisplayWithExpand.push({
        name: dt,
        isSelect: true
      })
    })

    if (!(localStorage.getItem('colums')?.split(','))?.length) {
      this.columnsToDisplayWithExpand = dtArr;
      this.menuColumnsList = this.initialColumnsToDisplayWithExpand;
    }
    else {
      this.columnsToDisplayWithExpand = (localStorage.getItem('colums')?.split(','))!;

      this.menuColumnsList = this.initialColumnsToDisplayWithExpand
      this.menuColumnsList.map((dt: any) => {
        let isSlct = false;
        this.columnsToDisplayWithExpand.map((clm: any) => {
          if (dt.name == clm) isSlct = true;
        })

        dt.isSelect = isSlct
        this.modelColumns = this.columnsToDisplayWithExpand;
      })
    }
    this.calculateTotalsExpandable();
    this.generateFormExpandable();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    this.secondDataSource.paginator = this.commonPaginator;
    this.dataSourceExpandable.sort = this.sort;
    this.excelHeaders.paginator = this.commonPagExcel;
  }

  // SECOND TABLE CODES
  highlight(event: any) {
    [...event.target.parentElement.parentElement.children].forEach(e => {
      if (e !== event.target.parentElement) {
        e.style.backgroundColor = '';
      }
    });
    event.target.parentElement.style.backgroundColor = event.target.parentElement.style.backgroundColor === ''
      ? '#b3ebff' : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.firstDataSource.filter = filterValue.trim().toLowerCase();
  }


  calculateTable() {
    this.sum = 0;
    this.secondDataSource.data.map((dt: any) => {
      this.sum += Number(dt.Total);
    })
  }

  filterTable() {
    let filters = JSON.parse(localStorage.getItem('filterData')!);
    let dataArr: any[] = [];
    filters.length ? filters = filters : filters = null;

    if (filters) {
      filters.forEach((element: any) => {
        dataArr = this.secondInitialDataSource.data.filter((dt: any) => {
          if (element.key == 'date') {
            let dArr = element.value.split("-");
            if (dt[element.key] == dArr[1] + "-" + dArr[2] + "-" + dArr[0]) return dt
          }
          else {
            if (dt[element.key].toString().toLowerCase().includes(element.value.toLowerCase())) return dt
          }
        })
      });

      this.secondDataSource = new MatTableDataSource<any>(dataArr);
      this.secondDataSource.data = this.secondDataSource.data;
      this.secondDataSource.paginator = this.commonPaginator;
    }

    else {
      this.secondDataSource = new MatTableDataSource<any>(this.secondInitialDataSource.data);
      this.secondDataSource.data = this.secondDataSource.data;
      this.secondDataSource.paginator = this.commonPaginator;
    }

    this.calculateTable();
  }

  handleFilter() {
    this.orderRequestData.filters = []
    Object.keys(this.filterForm.controls).forEach((key: string) => {
      if (this.filterForm.get(key)?.value.length > 0) {
        this.orderRequestData.filters?.push({
          columnName: key,
          value: this.filterForm.get(key)?.value,
          order: 0
        })
      }
    });

    let dataArr: any = [];
    // this.orderRequestData.filters.forEach((element: any, keyFilter: any) => {
    //   // dataArr = this.secondInitialDataSource.data.filter((dt: any) => {
    //   //   console.log(element.columnName)
    //   //   // if (element.key == 'date') {
    //   //   //   let dArr = element.value.split("-");
    //   //   //   if (dt[element.key] == dArr[1] + "-" + dArr[2] + "-" + dArr[0]) return dt
    //   //   // }
    //   //   // else {
    //   //   if (dt[element.columnName].toString().toLowerCase().includes(element.value.toLowerCase())) return dt
    //   //   // }
    //   // })
    // });
    dataArr = this.secondInitialDataSource.data.filter(o => this.orderRequestData.filters.every(({ columnName, value } : any) => o[columnName].toString().toLowerCase().includes(value.toString().toLowerCase())));
    this.secondDataSource.data = dataArr;
    this.secondDataSource.data = this.secondDataSource.data;
    this.secondDataSource.paginator = this.commonPaginator;
  }

  handleKeyUp(e: any) {
    if (e.keyCode === 13) {
      this.handleFilter();
    }
  }

  isActive = (index: number) => { return this.activeRowSecond === index };

  highlightinputTable(index: number, id: number, row: any): void {
    if (!this.isActive(index)) {
      row != this.highlightRowDataSecond ? this.highlightRowDataSecond = row : this.highlightRowDataSecond = '';
      this.activeRowSecond = index;
      this.selectedIdSecond = id;
    }
    else {
      this.activeRowSecond = -1;
      this.selectedIdSecond = 0;
      this.highlightRowDataSecond = '';
    }
  }

  // EXCEL TABLE CODES
  deleteExcelTableLine(index: number) {
    this.excelDataSource.data.splice(index, 1);
    this.excelDataSource.paginator = this.excelTablePag;
  }

  uploadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    this.excelFileName = file.name;
    fileReader.onload = (e) => {
      let book = XLSX.read(fileReader.result, { type: 'binary' });
      let sheetNames = book.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(book.Sheets[sheetNames[0]]);

      for (let index = 0; index < this.excelData.length; index++) {

        let json = {
          routelineId: 0,
          containerNo: '',
          overhead: '',
          qnq: "",
          qnqId: -1,
          wagonNo: 0,
          contPrefix: '',
          fileName: "",
          filePath: "",
          checkStatus: 1,
        }

        json.containerNo = String(this.excelData[index].ContainerNo);
        json.overhead = String(this.excelData[index].Waybill);
        json.wagonNo = this.excelData[index].Wagon;
        json.contPrefix = this.excelData[index].Prefix;
        json.routelineId = 0;
        this.excelDataSource.data.push(json)
      }

      this.excelDataSource.sort = this.sort;

    }
  }

  uploadFile(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file?.name;
  }

  onCreateOverhead() {
    this.excelFileName = '';
    this.fileName = '';
    this.excelF['routeLineId'].setValue(0);
    this.excelF['qnqId'].setValue(-1);
    this.excelF['checkStatus'].setValue(1);

    if (this.file) {
      this.excelF['filePath'].setValue('dataFilePath');
      this.excelF['fileName'].setValue("dataFile");
      this.excelDataSource = new MatTableDataSource<any>([...this.excelDataSource.data, this.excelTableForm.value]);
      this.excelDataSource.paginator = this.excelTablePag;
      this.excelTableForm.reset();
      this.file = undefined;
    } else {
      this.excelDataSource = new MatTableDataSource<any>([...this.excelDataSource.data, this.excelTableForm.value]);
      this.excelDataSource.paginator = this.excelTablePag;
      this.excelTableForm.reset();
      this.file = undefined;
    }
  }

  // Editable table codes
  onOpenBtns(id: number) {
    this.displayId = id;
    this.displayBtns = !this.displayBtns;
    this.displayUpdateBtn = -1;
  }

  saveLine(id: number) {
    this.editableRowTable = new MatTableDataSource<any>(this.lines.value);
    this.onOpenBtns(id);
    this.openUpdateBtn = false;
  }

  updateLine(index: number) {
    this.displayUpdateBtn = index;
    this.openUpdateBtn = true;
    this.editableRowTable = new MatTableDataSource<any>(this.lines.value);
  }

  deleteLine(index: number) {
    this.editableRowTable.data.splice(index, 1);
    this.lines.removeAt(index);
    this.displayBtns = false;
    this.editableRowTable = new MatTableDataSource<any>(this.lines.value);
  }

  uploadFileEditaleTable(event: any, index: number) {
    this.editableRowTable.data[index].selectedFileName = event.target.files[0].name;
    this.file = event.target.files[0];
    this.anyForm.controls['lines'].value[index].fileName = 'res.fileName';
    this.anyForm.controls['lines'].value[index].fileId = 0;
    this.editableRowTable.data[index].FilePath = 'res.filePath'
    this.hideFile = true;
  }

  //EXPANDABLE TABLE
  toggleRow(row: any, indexRow: any) {
    if (indexRow == 0) {
      this.dataSourceExpandable.data[0].dataSourceRow = ELEMENT_DATANormal;
    }
    else if (indexRow == 1) {
      this.dataSourceExpandable.data[1].dataSourceRow = ELEMENT_DATANormal2;
    }
    else {
      this.dataSourceExpandable.data[1].dataSourceRow = [];
    }
    const index = this.expandedElements.findIndex((x: any) => x.position == row.position);
    if (index === -1 && row.dataSourceRow) {

      row.isClicked = true;
      this.expandedElements.push(row);
    } else {
      row.isClicked = false;

      this.expandedElements.splice(index, 1);
    }
  }

  calculateTotalsExpandable() {
    this.totalsArray = [];

    for (let i = 1; i < this.columnsToDisplayWithExpand?.length; i++) {
      this.totals = 0;
      this.dataSourceExpandable.data.map(t => {
        typeof (t[this.columnsToDisplayWithExpand[i]]) == 'string' ? this.totals += 0 : this.totals += Number(t[this.columnsToDisplayWithExpand[i]]);
      });

      if (this.totals) this.totalsArray.push(this.totals.toFixed(2));
      else this.totalsArray.push('');
    }
  }

  handleFilterExpandable() {
    this.orderRequestDataExpandable.filters = [];

    Object.keys(this.filterFormExpandable.controls).forEach((key: string) => {
      if (this.filterFormExpandable.get(key)?.value.length > 0) {
        this.orderRequestDataExpandable.filters?.push({
          columnName: key,
          value: this.filterFormExpandable.get(key)?.value,
        })
      }
    });

    let dataArr: any = [];
    dataArr = this.initialDataSourceExpandable.data.filter(o => this.orderRequestDataExpandable.filters.every(({ columnName, value } : any) => o[columnName].toString().toLowerCase().includes(value.toString().toLowerCase())));
    this.dataSourceExpandable.data = dataArr;
    this.dataSourceExpandable.data = this.dataSourceExpandable.data;
    this.dataSourceExpandable.paginator = this.commonPaginator;
  }

  handleKeyUpExpandable(e: any) {
    if (e.keyCode === 13) {
      this.handleFilterExpandable();
    }
  }


  openPopup(element: any) {

  }

  openColumns() {

  }

  removeFilter() {
    this.columnsToDisplayWithExpand = this.initialColumnsToDisplayWithExpand;
    this.isFilter = false;
  }

  Pdf() {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * fileWidth) / canvas.width;
      let heightLeft = imgHeight;
      heightLeft -= pageHeight;
      const FILEURI = canvas.toDataURL('image/png');

      let PDF = new jsPDF('p', 'mm', 'a4');
      var width = PDF.internal.pageSize.getWidth();
      var height = PDF.internal.pageSize.getHeight();
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, imgHeight, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        PDF.addPage();
        PDF.addImage(canvas, 'PNG', 0, position, fileWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      PDF.save('test.pdf');
    });
  }

  downloadExcel(filename: string) { 
    this.dataArray = JSON.parse(JSON.stringify(this.dataSourceExpandable.data))
    let res = this.initialColumnsToDisplayWithExpand.filter(item => !this.columnsToDisplayWithExpand.includes(item));

    let uniqueArray = res.filter(function (item, pos) {
      return res.indexOf(item) == pos;
    })

    uniqueArray.map((dt: any) => {
      this.dataArray.forEach(function (v) { delete v[dt] });
    });

    const workSheet = XLSX.utils.json_to_sheet(this.dataArray);
    const workBook = XLSX.utils.book_new(); // book yaradir

    XLSX.utils.book_append_sheet(workBook, workSheet, 'datas')

    let buffer = XLSX.write(workBook, { bookType: "xlsx", type: 'buffer' });
    XLSX.write(workBook, { bookType: "xlsx", type: 'binary' }); //binary string

    XLSX.writeFile(workBook, `${filename}.xlsx`); // download
  }

  displayFiles() {
    this.isFilesClick = true;
    this.isFiles = !this.isFiles;
  }

  isExpanded(row: any): string {
    if (
      this.expandedElements.findIndex(x => x.position == row.position) !== -1
    ) {
      return 'expanded';
    }

    else {
      return 'collapsed';
    }
  }

  generateFormExpandable() {
    let model: any = {};
    this.columnsToDisplayWithExpand.map((dt: any) => {
      model[dt] = '';
    })

    this.filterFormExpandable = this.fb.group(model)
  }

  chooseColumn($event: any, name: string, status: boolean, index: any) {
    $event.stopPropagation();
    $event.preventDefault();

    if ($event.target && $event.target.tagName == 'BUTTON') {
      status == true ? this.menuColumnsList[index].isSelect = false : this.menuColumnsList[index].isSelect = true;

      let arr: any[] = [];

      this.menuColumnsList.map((dt: any) => {
        if (dt.isSelect == true) arr.push(dt.name)
      })

      if (arr.length) {
        localStorage.setItem('colums', arr.toString());
      }

      else {
        let arrDefault = ['expand']
        this.menuColumnsList[this.menuColumnsList.findIndex((x: any) => x.name == 'expand')].isSelect = true;
        localStorage.setItem('colums', arrDefault.toString())
      }

      if (!(localStorage.getItem('colums')?.split(','))?.length) this.columnsToDisplayWithExpand = this.initialColumnsToDisplayWithExpand;
      else this.columnsToDisplayWithExpand = (localStorage.getItem('colums')?.split(','))!;

    }

    this.generateFormExpandable();
    this.calculateTotalsExpandable();
  }

  exportTableToExcel(tableId: string, name?: any) {
    let targetTableElm = document.getElementById(tableId);
    console.log(targetTableElm)
    // let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
    //   sheet: 'sheetName'
    // });
    // XLSX.writeFile(wb, `excel.xlsx`);

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(targetTableElm);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    console.log(ws)
    console.log(wb)
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  exportToExcel(data: any[], headerKeyArray: string[], headerTranslateArray: string[], filename?: string) {
    const filteredData = data.map(item => {
      const filteredItem: any = {};
      const obj: { [key: string]: string } = {};
  
      headerKeyArray.map((dt: any, key: any) => {
        obj[`${dt}`] = headerTranslateArray[key];
      })
  
      Object.keys(obj).forEach(columnKey => {
        if (item.hasOwnProperty(columnKey)) {
          const mappedColumnName = obj[columnKey];
          if (mappedColumnName) {
            filteredItem[mappedColumnName] = item[columnKey];
          }
        }
      });
      return filteredItem;
    });
  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    FileSaver.saveAs(blob, filename + '.xlsx'); 
  }

  handleExportExcelWithHeader() {
    this.exportToExcel(this.excelHeaders.data, this.displayedColumns.columns, this.displayedColumns.columnsTranslates, "Test excel")
  }
}
