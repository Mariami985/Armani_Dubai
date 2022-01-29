import { Component, OnInit } from '@angular/core';

interface ItemInterFace{
  id:number,
  title:string,
  text:string,
}

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {

  public item:ItemInterFace[]=[
    {
    id:1,
    title:'Have a question?',
    text:'Fill out form below and we will get in touch with you',
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
  
}
