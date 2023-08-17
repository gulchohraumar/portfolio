import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illdy',
  templateUrl: './illdy.component.html',
  styleUrls: ['./illdy.component.scss']
})
export class IlldyComponent implements OnInit {

  latestNews: any[] = [
    {
      title: "Lorem ipsum dolor sit amet.",
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis soluta ducimus doloremque consectetur reiciendis!soluta ducimus doloremque consectetur reiciendis!',
      url: '',
      img: '../../../../assets/projects/illdy/blog-1.jpeg'
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis soluta ducimus doloremque consectetur reiciendis!soluta ducimus doloremque consectetur reiciendis!',
      url: '',
      img: '../../../../assets/projects/illdy/blog-2.jpeg'
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis soluta ducimus doloremque consectetur reiciendis!soluta ducimus doloremque consectetur reiciendis!',
      url: '',
      img: '../../../../assets/projects/illdy/blog-3.jpeg'
    },
  ];

  counts: any[] = [
    {
      number: 260,
      title: 'Projects',
    },
    {
      number: 120,
      title: 'Clients',
    },
    {
      number: 260,
      title: 'Coffees',
    },
  ]

  team: any[] = [
    {
      fullname: 'Mark Lawrance',
      job: 'Web designer',
      content: 'Creative, detail-oriented, always focused.',
      img:'../../../../assets/projects/illdy/front-page-team-1.jpg',
      color: 'rgb(214, 107, 88)'
    },
    {
      fullname: 'Jane Stenton',
      job: 'SEO Specialist',
      content: 'Curious, tech-geeck and gets serious.',
      img:'../../../../assets/projects/illdy/front-page-team-2.jpg',
      color: 'rgba(248, 205, 11, 0.767)'
    },
    {
      fullname: 'John Smith',
      job: 'Developer',
      content: 'Enthusiastic, passionate with great sense of humor.',
      img:'../../../../assets/projects/illdy/front-page-team-3.jpg',
      color: 'rgb(94, 57, 94)'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
