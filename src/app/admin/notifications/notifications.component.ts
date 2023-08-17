import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  articlesData: any[] = [];
  selectedData: any
  arrayLength = 10;

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  }

  getArray(count: number) {
    return new Array(count)
  }
  constructor(
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    this.contactService.getDatas().subscribe({
      next: res => {
        this.articlesData = res;
      },
      error: err => console.log(err)
    })
  }

  handleSelect(data: any){
    this.selectedData = data;
  }

}
