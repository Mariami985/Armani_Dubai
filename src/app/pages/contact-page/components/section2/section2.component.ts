import { Component, OnInit } from '@angular/core';

interface ItemInterFace{
  title: string,
  text: string,
  email:string,
  phone:number,
  id:number,

}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  public item: ItemInterFace[] = [
    {
      id:1,
      title:'book your dine experience',
      text:'armani/die',
      email:'Restaurant.Reservations@armanihotels.com',
      phone:97148883666,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
