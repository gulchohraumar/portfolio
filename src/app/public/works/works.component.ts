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
      link: '../../tables',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/cards.webp',
      color: 'darkorange',
      title: 'Cards ui',
      link: '../../cards',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: '#9fcb42',
      title: 'Illdy prototype',
      link: '../../illdy',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/draggable.png',
      color: 'rgb(250 208 44)',
      title: 'Draggable elements',
      link: '../../draggable',
      hiperLink: ''
    },

    {
      url: '../../../assets/projects/dazko.svg',
      color: '#4fabf7',
      title: 'Dazko',
      link: '',
      hiperLink: 'https://inquisitive-yeot-fd19d4.netlify.app/'
    },
    {
      url: '../../../assets/projects/layout.png',
      color: '#8d8ae6',
      title: '"Illdy" layout',
      link: '',
      hiperLink: 'https://thriving-youtiao-4b75d8.netlify.app/'
    },
    {
      url: '../../../assets/projects/watchFilm.png',
      color: '#e2905a',
      title: 'How can watch film?',
      link: '',
      hiperLink: 'https://illustrious-pie-12d75a.netlify.app/'
    },
    {
      url: '../../../assets/projects/seramic.png',
      color: '#dfa5a8',
      title: 'Mina Seramic (React)',
      link: '',
      hiperLink: 'https://celadon-pika-fd5113.netlify.app/'
    },
    {
      url: '../../../assets/projects/car.png',
      color: '#df421c',
      title: 'Car (React)',
      link: '',
      hiperLink: 'https://illustrious-dusk-629bac.netlify.app/'
    },
    {
      url: '../../../assets/projects/trello.png',
      color: '#4643d2',
      title: 'Mini trello (Angular)',
      link: '',
      hiperLink: 'https://sensational-maamoul-6416ce.netlify.app/main/task'
    },
  ];

  constructor(){

  }

  ngOnInit(){

  }


}
