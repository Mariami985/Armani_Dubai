import { Component, OnInit } from '@angular/core';


interface DataInterFace{
  title:string,
  id: number,
  text:string,
  text2:string,
  title2:string,

}
interface ItemsInterFace{
  description: string;
  phone: number ;
  id: number;
}
interface ArrayInterFace{
  description: string;
  phone: number ;
  id: number;
}

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  public  data: DataInterFace[] = [
    {
      id:1,
      text: 'We would like to hear from You! Here are a few ways to get in touch with us.',
      title:'Hotel reservation.',
      text2:'For further information, bookings, or special requests, we invite you to get in touch:',
      title2:'toll free numbers',
    },
  ]

  public items: ItemsInterFace[] = [
    {
      id: 1,
      description:' GENERIC NUMBER:',
      phone:  +97148883888,
    },
    {
      id: 2,
      description:' ROOM RESERVATIONS:',
      phone: +97148883601,
    },
    {
      id: 3,
      description:'RESTAURANT RESERVATIONS:',
      phone:  +97148883999,
    },
    {
      id: 4,
      description:'EVENT ENQUIRIES:',
      phone:  +97148883666,
    },
    {
      id: 5,
      description:'ARMANI RETAIL:',
      phone:   +97148883001,
    },
  ]
  public array: ArrayInterFace[]=[

    {
      id: 1,
      description:'uae:',
      phone: 800,
    },
    {
      id: 2,
      description:'ksa:',
      phone: 8008971961,
    },
    {
      id: 3,
      description:'usa:',
      phone:18443980613,
    },
    {
      id: 4,
      description:'russia:',
      phone: 81080020001971,
    },
    {
      id: 5,
      description:'italy:',
      phone: 800128970,
    },
    {
      id: 6,
      description:'china:',
      phone:4008424101,
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
