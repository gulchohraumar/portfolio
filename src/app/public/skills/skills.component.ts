import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)',

      })),
      transition('default => flipped', [
        animate('320ms', style({ transform: "translateY(0px) rotateY(180deg)" }))
      ]),
      transition('flipped => default', [
        animate('320ms', style({ transform: "translateY(0px)" }))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  constructor() { }
  cards: any[] = [];
  perc = 80;
  skills: any[] = [];

  ngOnInit(): void {

    this.skills = [
      {
        name: 'Languages',
        fields: [
          {
            name: "HTML5",
            url: "../../../assets/skills/html.png",
            color: "#f16524",
            percent: '95%',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 9,
            state: false,
          },
          {
            name: "CSS3",
            url: "../../../assets/skills/css.png",
            color: "rgb(41 101 241)",
            percent: '95%',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 9,
            state: false,
          },
          {
            name: "JavaScript ",
            url: "../../../assets/skills/js.png",
            percent: '88%',
            color: '#d6ba32',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 8,
            state: false,
          },
        ]
      },
      {
        name: 'Frameworks',
        fields: [
          {
            name: "Bootstrap",
            url: "../../../assets/skills/bootstrap.png",
            color: "#860afb",
            percent: '90%',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 9,
            state: false,
          },
          {
            name: "Tailwind",
            url: "../../../assets/skills/tailwind.png",
            color: "rgb(8 204 183)",
            percent: '90%',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 9,
            state: false,
          },
          {
            name: "TypeScript",
            url: "../../../assets/skills/ts.png",
            color: '#017acb',
            percent: '85%',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 8,
            state: false,
          },
          {
            name: "Angular",
            url: "../../../assets/skills/angular.svg",
            percent: '70%',
            color: '#df2e31',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
          {
            name: "React (basic)",
            url: "../../../assets/skills/react.png",
            percent: '60%',
            color: 'rgb(97 219 251)',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
        ]
      },
      {
        name: 'Libraries',
        fields: [
          {
            name: "Angular Material",
            url: "../../../assets/skills/angularMaterial.png",
            percent: '45%',
            color: 'rgb(217 30 133)',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
          {
            name: "RxJS",
            url: "../../../assets/skills/rxjs.svg",
            percent: '45%',
            color: 'rgb(217 30 133)',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
          {
            name: "Redux",
            url: "../../../assets/skills/redux.png",
            percent: '40%',
            color: 'rgb(131 89 195)',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
          {
            name: "RESTful Api",
            url: "../../../assets/skills/api.png",
            percent: '90%',
            color: 'rgb(0 150 214)',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 7,
            state: false,
          },
        ]
      },
      {
        name: 'CI / CD',
        fields: [
          {
            name: "Git and Github",
            url: "../../../assets/skills/gitHub.png",
            percent: '90%',
            color: '#000',
            point: [
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: true },
              { isActive: false },
            ],
            countActive: 9,
            state: false,
          },
        ]
      },
    ]
 
  }

  cardClicked(id: number) {
    this.skills[id].state = !this.skills[id].state;
  }

}
