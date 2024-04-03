import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor() { }
  experienceList = [
    {
      name: 'Intern Front-End Web Developer | Algorithmics Azerbaijan',
      imgUrl: '../../../assets/experience/algorithmics.png',
      period: 'Feb 2022 - Jun 2022',
      works: [
        { desc: "I learned basics of web developement, how we can work with front-end languages, tools,  libraries to make more efficient, reliable, safe etc products and so on." },
        { desc: "Developed user interface components and implemented them following well-known React.js workflows." },
      ]
    },
    {
      name: 'Intern Front-End Web Developer | "Uniser Group" MMC',
      imgUrl: '../../../assets/experience/uniserGroup.png',
      period: 'Jun 2022 - Sep 2022',
      works: [
        { desc: " I improved my abilities about web developement, how we can work with team and get more  skills about programminng in this term." },
        { desc: " Support ready project and to make some changes in their UI and integrate them with database " },
      ]
    },
    {
      name: 'Front-End Web Developer | "Uniser Group" MMC',
      imgUrl: '../../../assets/experience/uniserGroup.png',
      period: 'Sep 2022 - Current',
      works: [
        { desc: " I developed the front-end of new software for many logistics, travel, etc. companies and supported previous projects working within the team. During this term, I used HTML5, CSS3 (Bootstrap, Tailwind), JavaScript (Angular) and so many npm libraries. And I continue to do so." },
      ]
    },
  ]

  ngOnInit(): void {
  }

}
