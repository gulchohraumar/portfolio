import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
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
    {
      url: '../../../assets/projects/draggable.png',
      color: 'rgb(250 208 44)',
      title: 'Draggable elements',
      link: '../../draggable'
    },

  ];

  constructor(){

  }

  ngOnInit(){

  }


}
