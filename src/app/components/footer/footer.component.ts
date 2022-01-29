import { Component, OnInit } from '@angular/core';

interface TitleInterFace{
  title:string,
  text:string,
}
interface UlInterFace{
  hotel: string,
  street: string,
  city:string,
  tel:string,
  email:string,
}
interface LiInterFace{
  title:string,
  id:number
}
interface PInterFace{
title:string,
}
interface FooInterFace{
  text:string,
  id:number
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public title: TitleInterFace[] = [
    {
      title:'armani',
      text:'hotel dubai',
    }
  ]

  public data: UlInterFace[] = [
    {
      hotel: 'p.o. box 888 333, burj khalifa',
      street:'1 Mohammed bin Rashid Boulevard, Downtown Dubai',
      city:' Dubai – UAE',
      tel:'Tel: +971 4888 3888',
      email: 'Email: dubai@armanihotels.com'

    }
  ]

  public item: LiInterFace[] = [
    {
      id:1,
      title: 'MEDIA CENTER',
    },
    {
      id:2,
      title: ' y by emmar ',
    },
    {
      id:3,
      title: 'about us ',
    },
    {
      id:4,
      title: 'contact',
    }
  ]
  public title1: PInterFace[] = [
    {
      title:'Rights reserved to Armani Hotel Dubai',
    }
  ]
  public text: FooInterFace[] = [
    {
      id:1,
      text:'legas disclaimer'
    },
    {
      id:2,
      text:'privacy policy'
    },
    {
      id:3,
      text:'cookie'
    },
    {
      id:4,
      text:'policy'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
