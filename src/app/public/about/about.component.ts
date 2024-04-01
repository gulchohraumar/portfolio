import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skillsList = [
    {
      name: 'Html5'
    },
    {
      name: 'Css3'
    },
    {
      name: 'Bootstrap'
    },
    {
      name: 'Tailwind'
    },
    {
      name: 'Material UI'
    },
    {
      name: 'JavaScript'
    },
    {
      name: 'TypeScript'
    },
    {
      name: 'Angular'
    },
    {
      name: 'React (Intermediate)'
    },
    {
      name: 'RxJS'
    },
    {
      name: 'Context API'
    },
    {
      name: 'Basic Redux'
    },
    {
      name: 'RestFull API'
    },
    {
      name: 'Git & Github'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
