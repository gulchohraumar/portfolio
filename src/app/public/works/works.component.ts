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
      link: '../../works/tables',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/cards.webp',
      color: 'darkorange',
      title: 'Cards ui',
      link: '../../works/cards',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: '#9fcb42',
      title: 'Illdy prototype',
      link: '../../works/illdy',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/draggable.png',
      color: 'rgb(250 208 44)',
      title: 'Draggable elements',
      link: '../../works/draggable',
      hiperLink: ''
    },
    {
      url: '../../../assets/projects/parallax.png',
      color: 'rgb(168 216 177)',
      title: 'Parallax backgrounds',
      link: '../../works/parallax-background',
      hiperLink: ''
    },

    {
      url: '../../../assets/projects/dazko.svg',
      color: '#4fabf7',
      title: 'Dazko',
      link: '',
      hiperLink: 'https://inquisitive-yeot-fd19d4.netlify.app/'
    },
    // {
    //   url: '../../../assets/projects/layout.png',
    //   color: '#8d8ae6',
    //   title: '"Illdy" layout',
    //   link: '',
    //   hiperLink: 'https://thriving-youtiao-4b75d8.netlify.app/'
    // },
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
      url: '../../../assets/projects/denta.svg',
      color: '#4643d2',
      title: 'Denta (Angular)',
      link: '',
      hiperLink: 'https://664ed87ad6604bb32be3af9e--chipper-salamander-bf3d53.netlify.app/'
    },
  ];

  constructor(){ }

  ngOnInit(){

  }


}
