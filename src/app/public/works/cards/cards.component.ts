import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  filterCardsData: any[] = [];
  cards: any[] = [];
  
  constructor(
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
  ) { }

  projects: any[] = [
    {
      url: '../../../assets/projects/table.webp',
      color: 'cornflowerblue',
      title: 'Multifunctional table',
      link: '../../tables'
    },
    {
      url: '../../../assets/projects/cards.webp',
      color: 'darkorange',
      title: 'Cards ui',
      link: '../../cards' 
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: '#9fcb42',
      title: 'Illdy prototype',
      link: '../../illdy'
    },
    {
      url: '../../../assets/projects/layout.png',
      color: '#8d8ae6',
      title: 'Figma layouts',
      link: '../../layouts'
    },

  ];


  ngOnInit(): void {
    this.filterCardsData = [
      {
        ColorCode: "#6c5b7b",
        ContCount: 19,
        Operation: "All",
        Percentage: 100,
        RouteCount: 8,
        Type: -1,
      },

      {
        ColorCode: " #007bff",
        ContCount: 8,
        Operation: "Loaded",
        Percentage: 42.11,
        RouteCount: 5,
        Type: 1,
      },

      {
        ColorCode: " #ffc107",
        ContCount: 8,
        Operation: "In process",
        Percentage: 42.11,
        RouteCount: 4,
        Type: 2,
      },

      {
        ColorCode: "#28a745",
        ContCount: 3,
        Operation: "Arrival",
        Percentage: 15.79,
        RouteCount: 1,
        Type: 4,
      },
    ]

    this.filterCardsData.forEach((item, key) => {
      this.filterCardsData[key].counter = 0;
      this.filterCardsData[key].counterContainer = 0;
    })

    let cardData = this.filterCardsData;
    let rf = this.ref
    let intervalLoaded = setInterval(function () {
      if (cardData[0].RouteCount > 0) cardData[0].counter++;
      if (cardData[0].counter == cardData[0].RouteCount) clearInterval(intervalLoaded);
      rf.markForCheck();
    }, 100);

    let intervalLoadedContainer = setInterval(function () {
      if (cardData[0].ContCount > 0) cardData[0].counterContainer++;
      if (cardData[0].counterContainer == cardData[0].ContCount) clearInterval(intervalLoadedContainer);
      rf.markForCheck();
    }, 20);

    let intervalProcess = setInterval(function () {
      if (cardData[1].RouteCount > 0) cardData[1].counter++;
      if (cardData[1].counter == cardData[1].RouteCount) clearInterval(intervalProcess);
      rf.markForCheck();
    }, 100);

    let intervalProcessContainer = setInterval(function () {
      if (cardData[1].ContCount > 0) cardData[1].counterContainer++;
      if (cardData[1].counterContainer == cardData[1].ContCount) clearInterval(intervalProcessContainer);
      rf.markForCheck();
    }, 20);

    let intervalArrival = setInterval(function () {
      if (cardData[2].RouteCount > 0) cardData[2].counter++;
      if (cardData[2].counter == cardData[2].RouteCount) clearInterval(intervalArrival);
      rf.markForCheck();
    }, 100);



    this.setFlipModules();

  }

  isEditBtn = true;
  isDisable = true;
  name: any = 'Angular 4';
  url: any = '';
  isUrl = false;
  isCamera = false;
  @ViewChild("foobarElement") foobar!: ElementRef;

  userForm = this.fb.group({
    id: 0,
    name: ['Gulchohra', Validators.required],
    lastname: ['Umarli', Validators.required],
    email: ['gulchohra@gmail.com', Validators.required],
    phone: ['+994', Validators.required],
    fax: ['', Validators.required],
    password: ['12345', Validators.required],
  })

  edit() {
    this.isEditBtn = false;
    this.isDisable = false;
  }

  save() {
    this.isEditBtn = true;
    this.isDisable = true;
  }

  lookPhoto() {
    // this.dialog_ref = this.dialog.open(AvatarComponent, {
    //   disableClose: true,
    //   hasBackdrop: true,
    //   width: '40%',
    //   height: 'auto',
    //   autoFocus: false,
    //   data: {
    //     url: this.isCamera ? this.url : ''
    //   }
    // })

    // this.dialog_ref.afterClosed().subscribe(res => {

    // })
  }

  changePhoto() {
    this.foobar.nativeElement.click()  //this method firing onSelectFile() method
  }

  onSelectFile(event: any) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
      this.isUrl = true;
      this.isCamera = false;
    }
  }
  
  public delete() {
    this.url = null;
    this.isUrl = false;
  }

  savePhoto() {
    alert('Saved successfully!')
    this.isUrl = false;
    this.isCamera = true;
  }




  // FLIP-FLOP CARDS 

  setFlipModules(){
    this.cards = [
      {
        color:'cornflowerblue',
        path: '../../../../assets/flip-card-icon/tarif.svg',
        value: 'Tarif',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, praesentium.',
      },
      {
        color:'red',
        path: '../../../../assets/flip-card-icon/cms.svg',
        value: 'Container park',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, praesentium.',
      },
      {
        color:'#9fcb42',
        path: '../../../../assets/flip-card-icon/finance.svg',
        value: 'Finance',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, praesentium.',
      },
      {
        color:'#8d8ae6',
        path: '../../../../assets/flip-card-icon/option.svg',
        value: 'Options',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, praesentium.',
      },
    ]
    this.cards.forEach((item, key) => {
      this.cards[key].state = false;
    });
  }

  cardClicked(id: number) { 
    this.cards[id].state = !this.cards[id].state;
  }


}
