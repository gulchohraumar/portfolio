import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {
  title = "Add ";
  isAddPopUp = true;
  isUpdatePopUp = false;

  statusForm = this.fb.group({
    id: 0,
    moduleId: ['', Validators.required],
    colorCode: ['#1A9CC9', Validators.required],
    orderBy: 0,
    translations: this.fb.array([]),
  })

  languages: any[] = [];
  modules: any[] = [];
  done: any[] = [];
  isList = false;
  isChecked = false;

  highlightedRows: any[] = [];
  highlightedRowss: any = {};
  selectedIndex = 0;

  isCause = false;
  // id!: Guid;
  langCount!: number;
  initialValues: any;
  constructor(private fb: FormBuilder) { }
  selectedUpdateIndex = -1;
  statusArr: any[] = [];
  arrSub: any[] = [];
  arrDesc: any[] = [];
  deletedStIds: any[] = []

  disableModule = false;

  ngOnInit(): void {
    // this.statusService.getModules().subscribe({
    //   next: (res) => {
    //     res.data.map((dt: any) => this.modules.push(dt))
    //   },
    //   error: (err) => console.log(err)
    // })

    // this.langService.getSystemLangs().subscribe({
    //   next: (res) => {
    //     this.langCount = res.data.length
    //     this.languages = res.data
    //   },
    //   error: (err) => console.log(err)
    // })

    // if (this.data.isUpdate) {
    //   this.title = 'Update';
    //   this.isAddPopUp = false;
    //   this.isUpdatePopUp = true;

    //   this.getStatusDatas(this.data.rowData.moduleId);

    //   // this.statusService.getUpdateStatusData(this.data.rowData.moduleId).subscribe({
    //   //   next: (res) => {
    //   //     res.data.map((dt: any) => {
    //   //       for (let i = 0; i < dt.translations.length; i++) {
    //   //         if (dt.translations[i].langId == 1) {
    //   //           this.done.push({ message: `${dt.translations[i].subject} - ${dt.translations[i].description}`, color: dt.colorCode, data: dt });
    //   //         }
    //   //       }
    //   //     })

    //   //     this.statusForm.patchValue({
    //   //       moduleId: res.data[0].moduleId,
    //   //     })
    //   //     this.isList = true;
    //   //   },
    //   //   error: (err) => console.log(err),
    //   //   complete: () => {
    //   //     this.addnewSubjects();
    //   //   }
    //   // })
    // }

    // if (!this.data.isUpdate) {
    //   this.addnewSubjects();
    // }

    this.modules = [
      { key: 1, value: 'Order' },
      { key: 2, value: 'Options' },
    ]

    this.languages = [
      { id: 1, name: 'Azerbaijan', shortName: 'AZ' },
      { id: 2, name: 'English', shortName: 'EN' },
      { id: 3, name: 'Russian', shortName: 'RU' },
    ]
    this.addnewSubjects();



    //DRAG CONTAINERS
    this.initialTodo = this.todo;
    this.initialDone = this.done;
    this.initialStatus = this.statuses;

    if (!JSON.parse(localStorage.getItem('firstTable')!)) {

      this.dataSource.data = [
        { position: true, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: true, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: false, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: false, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: false, name: 'Boron2', weight: 10.811, symbol: 'B2' },
        { position: false, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: false, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: false, name: 'Nitrogen2', weight: 14.0067, symbol: 'N2' },
        { position: false, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: true, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: false, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: false, name: 'Lithium2', weight: 6.941, symbol: 'Li2' },
      ]
    }

    else {

      this.dataSource.data = JSON.parse(localStorage.getItem('firstTable')!)
    }

    if (!JSON.parse(localStorage.getItem('secondTable')!)) {
      this.dataSourceSecond.data = []
    }

    else {
      this.dataSourceSecond.data = JSON.parse(localStorage.getItem('secondTable')!)
    }

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      moveItemInArray(this.SF['translations'].value, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  get SF(): { [key: string]: AbstractControl } {
    return this.statusForm.controls;
  }

  get translations(): FormArray {
    return this.statusForm.get("translations") as FormArray
  }

  newSubjects(): FormGroup {
    return this.fb.group({
      langId: [''],
      subject: [''],
      description: [''],
    });
  }

  addnewSubjects() {
    if (!this.translations.length) this.translations.push(this.newSubjects());
    else {
      if (
        (this.translations.length != this.langCount)
        &&
        (this.translations.value[this.translations.length - 1].langId && this.translations.value[this.translations.length - 1].subject && this.translations.value[this.translations.length - 1].description)) this.translations.push(this.newSubjects());
      else alert('Add language and values first')
    }

  }

  newLangsPatch(data: any): FormGroup {
    return this.fb.group(data);
  }

  selectSubjectLang(langId: number, index: number) {
    let count = 0;
    this.translations.value.map((dt: any) => {
      if (dt.langId == langId) {
        count++;
      }
    })

    if (count > 1) {
      this.statusForm.value.translations?.splice(this.statusForm.value.translations.length - 1, 1)
      this.removeLang(this.statusForm.value.translations!.length)
      alert("You can not enter the same language")
    }
  }

  removeLang(id: number) {
    if (this.translations.length != 1) {
      this.translations.removeAt(id);
    }
  }

  removeSubjectListItem(id: number, index: number) {
    if (index == 0) this.disableModule = false;
    if (id) this.deletedStIds.push(id)
    this.done.splice(index, 1)
    this.SF['translations'].value.splice(index, 1)
    if (this.done.length == 0) this.isList = false;
  }

  addSubjectListItem() {

    this.statusForm.value.translations?.map((dt: any) => { // yeni sonuncu deyer bosdursa, onu arrayden sil
      if (!dt.langId || !dt.subject || !dt.description) this.statusForm.value.translations?.splice(this.statusForm.value.translations.length - 1, 1)
    })

    if (!this.translations.value.length) {
      alert("Please, fill all fields!")
    }

    else {
      this.done.push({ message: `${this.SF['translations'].value[0].subject} - ${this.SF['translations'].value[0].description}`, color: this.SF['colorCode'].value, data: this.statusForm.value });
      this.isList = true;
      (this.statusForm.controls['translations']).clear();
      this.addnewSubjects()
    }
    this.statusForm.get('colorCode')?.reset('#1A9CC9');


    this.disableModule = true;

    this.isChecked = false;
    this.isCause = false;

  }

  numberOnly(event: any): boolean {  // qnq ve etsnq code-a ancaq reqem yazsin
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getStatusDatas(key: number) {
  }

  changeModule(key: number) {
    if (!this.disableModule) this.getStatusDatas(key);
  }

  updateStatusData(data: any, index: number) {
    this.selectedUpdateIndex = index;
    this.SF['colorCode'].setValue(data.colorCode);
    this.statusForm.patchValue({
      id: data.id
    })

    for (let index = 0; index < this.translations.value.length; index++) {
      this.translations.removeAt(this.translations.value[index])
    }

    data.translations.map((dt: any) => {
      this.translations.push(this.newLangsPatch(dt))
    })
    this.addnewSubjects();
  }


  save() {
    if (this.isList) {

      this.statusForm.value.translations?.map((dt: any) => {
        if (!dt.langId || !dt.subject || !dt.description) this.statusForm.value.translations?.splice(this.statusForm.value.translations.length - 1, 1)
      })

      this.done.map((element: any, index: number) => {
        element.data.orderBy = index + 1;
      })

      this.done.map((dt: any) => this.statusArr.push(dt.data))

      console.log(this.deletedStIds)

      let saveModel = {
        deleteStatusIds: this.deletedStIds,
        statuses: this.statusArr
      }

      console.log(saveModel)
    }

    else {
      alert('You must add data')
    }
  }




  //DRAG CONTAINER CODES

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol2', 'symbol3', 'symbol4', 'symbol5', 'symbol6'];
  displayedColumnsSecond: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>([]);
  dataSourceSecond = new MatTableDataSource<any>([]);

  statuses: any[] = [
    { key: "#4a5759", value: 'All' },
    { key: "#ffbe0b", value: 'Order was accept' },
    { key: "#ff006e", value: 'Wait for invoice' },
    { key: "#8338ec", value: 'Wait for invoice' },
    { key: "#57cc99", value: 'Paid' },

  ];

  initialStatus: any[] = [];

  filterValue: any;
  filterValueSecond: any;

  date: any;
  dateSecond: any;
  statusId: any = '#4a5759';
  statusIdSecond: any = '#4a5759';

  pageEvent!: PageEvent;
  length?: number;
  lengthVender?: number;
  pageSize!: number;
  pageSizeOptions: number[] = [10, 15, 20];
  @ViewChild('commonPag') commonPaginator!: MatPaginator;
  @ViewChild('commonPagSecond') commonPaginatorSecond!: MatPaginator;


  todo = [
    { id: 1, order: '2302-0001', wagon: '737373', overhead: '1212', status: '#ffbe0b', statusText: 'Order was accept', date: '12-02-2023' },
    { id: 1, order: '2302-0004', wagon: '929292', overhead: '2323', status: '#8338ec', statusText: 'Wait for invoice', date: '25-02-2023' },
  ];



  initialTodo: any[] = [];

  doneContainer = [
    { id: 1, order: '2302-0002', wagon: '202020', overhead: '8888', status: '#ff006e', statusText: 'Wait for invoice', date: '25-01-2023' },
    { id: 1, order: '2302-0003', wagon: '121212', overhead: '4343', status: '#57cc99', statusText: 'Paid', date: '20-02-2023' },
    { id: 1, order: '2302-0004', wagon: '212121', overhead: '9999', status: '#8338ec', statusText: 'Wait for invoice', date: '05-03-2023' },
  ];

  initialDone: any[] = [];

  dropContainer(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.initialDone = this.doneContainer;
    this.initialTodo = this.todo;
  }

  filterLists(filterData: any, tableIndex: number) {
    if (tableIndex == 1) {
      let array = this.initialTodo.filter((o: any) => Object.keys(o).some((k: any) => o[k].toString().toLowerCase().includes(filterData.toLowerCase())))
      this.todo = array;
    }

    if (tableIndex == 2) {
      let array2 = this.initialDone.filter((o: any) => Object.keys(o).some((k: any) => o[k].toString().toLowerCase().includes(filterData.toLowerCase())))
      this.doneContainer = array2;
    }
  }

  applyFilter(event: any) {
    if (event.keyCode === 13) {
      this.filterLists(this.filterValue, 1);
    }
  }

  applyFilterStatus(tableIndex: any) {

    if (tableIndex == 1) {  // birinci table ise
      if (this.statusId == '#4a5759') {
        this.todo = this.initialTodo;
      }

      else {
        this.filterLists(this.statusId, 1)
      }
    }

    else if (tableIndex == 2) { // ikinci table
      if (this.statusIdSecond == '#4a5759') {
        this.doneContainer = this.initialDone;
      }

      else {
        this.filterLists(this.statusIdSecond, 2);
      }
    }
  }

  applyFilterSecond(event: any) {
    if (event.keyCode === 13) {
      this.filterLists(this.filterValueSecond, 2);
    }
  }

  moveToRight(i: any, element: any) {
    this.dataSource.data.splice(i, 1);

    this.dataSourceSecond.data.push(element);
    this.dataSource.data = this.dataSource.data;
    this.dataSourceSecond.data = this.dataSourceSecond.data;

    localStorage.setItem('firstTable', JSON.stringify(this.dataSource.data));
    localStorage.setItem('secondTable', JSON.stringify(this.dataSourceSecond.data));

  }

  moveToLeft(i: any, element: any) {
    this.dataSourceSecond.data.splice(i, 1);
    this.dataSource.data.push(element);
    this.dataSource.data = this.dataSource.data;
    this.dataSourceSecond.data = this.dataSourceSecond.data;
    localStorage.setItem('firstTable', JSON.stringify(this.dataSource.data));
    localStorage.setItem('secondTable', JSON.stringify(this.dataSourceSecond.data));

  }

  handleFilter(tableIndex: number) {
    console.log(this.date)
    console.log(this.dateSecond)
    if (tableIndex == 1) {
      let dataArr: any[] = [];
      if (this.date) {
        this.initialTodo.filter((dt: any) => {
          let dArr = this.date.split("-");
          if (dt.date == dArr[2] + "-" + dArr[1] + "-" + dArr[0]) dataArr.push(dt)

        });
        this.todo = dataArr;
      }
      else {
        this.todo = this.initialTodo;
      }
    }

    if (tableIndex == 2) {
      let dataArr: any[] = [];
      if (this.dateSecond) {
        this.initialDone.filter((dt: any) => {
          let dArr = this.dateSecond.split("-");
          if (dt.date == dArr[2] + "-" + dArr[1] + "-" + dArr[0]) dataArr.push(dt)

        });
        this.doneContainer = dataArr;
      }

      else {
        this.doneContainer = this.initialDone;
      }
    }

  }

}
