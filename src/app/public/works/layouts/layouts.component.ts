import { Component, OnInit, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  articlesData: any[] = [];
  // arrayLength = 10;

  // config: Slick.Config = {
  //     infinite: true,
  //     slidesToShow: 4,
  //     slidesToScroll: 2,
  //     dots: true,
  //     autoplay: true,
  //     autoplaySpeed: 2000 
  //   }

  // getArray(count: number) {
  //   return new Array(count)
  // }

  ngOnInit(): void {
   
      this.articlesData = [
        {
          imgPath: '../../../../assets/layout-images/creative-boutigue.png',
          title: 'Creative Boutigue',
          desc: 'All collections, Fancy suits',
          url: 'creative-boutigue',
        },
        {
          imgPath: '../../../../assets/layout-images/elegant-care.png',
          title: 'Elegant Care',
          desc: '',
          url: 'elegant-care',
        },
        {
          imgPath: '../../../../assets/layout-images/green-comfort/green-bg.svg',
          title: 'Green Comfort',
          desc: 'Wide Selection, Different Plants',
          url: 'green-comfort',
        },
        {
          imgPath: '../../../../assets/layout-images/golden-offer/girl.png',
          title: 'Golden Offer Day',
          desc: 'Discover The Golden Offer Day',
          url: 'golden-offer',
        },
      ]
 
  }

}
