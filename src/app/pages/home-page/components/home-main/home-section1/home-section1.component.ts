import { Component, OnInit } from '@angular/core';

interface ItemInterFace {
  id:number,
  title: string,
  text: string,
  description: string,
  button: string,
}

@Component({
  selector: 'app-home-section1',
  templateUrl: './home-section1.component.html',
  styleUrls: ['./home-section1.component.scss']
})
export class HomeSection1Component implements OnInit {

  public item: ItemInterFace[] = [
    {
      id:1,
      title:'higlight',
      text:'Pure Elegance, and Sophisticated Comfort ',
      description:'A once-in-a-lifetime holiday, a special occasion, an indulgent treat; make lifelong memories at Armani Hotel Dubai.Award-winning dining, luxurious spa facilities and signature Armani hospitality combine to create the ultimate experiences.',
      button:'discover more'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
