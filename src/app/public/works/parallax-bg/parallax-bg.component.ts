import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-bg',
  templateUrl: './parallax-bg.component.html',
  styleUrls: ['./parallax-bg.component.scss']
})
export class ParallaxBgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const cursor:any = document.querySelector(".cursor");
    let timeout:any;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor!.style.top = y + "px";
      cursor!.style.left = x + "px";
      cursor!.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });

    document.addEventListener("mousemove", this.parallax)
    
  }

  parallax(e: any) {
    document.querySelectorAll('.item-1-bg').forEach(function (move: any) {
      var mov_value = move.getAttribute("data-value");
      var x = (e.clientX * mov_value) / 200;
      var y = (e.clientY * mov_value) / 200;

      move.style.transform = "translateX("+ x + "px) translateY(" + y + "px)";
    })
  }


}
