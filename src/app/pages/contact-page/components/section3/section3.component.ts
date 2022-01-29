import { Component, OnInit } from '@angular/core';

interface ItemInterFace{
  title: string,
  text: string,
  email:string,
  phone:number,
  id:number,

}
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  public item: ItemInterFace[] = [
    {
      id:1,
      title:'book your spa treatment',
      text:'armani/die',
      email:'armanispa.dubai@armanihotels.com',
      phone:97148883282,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
