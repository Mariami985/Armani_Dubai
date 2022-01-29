import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  FormGroup:any
  myForm!:FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(20)]]
      });
    }
    onSubmit(form: FormGroup) {
      // console.log('Valid?', form.valid); 
      if(this.myForm.invalid){
       alert('Oops, something heppend wrong! Please check!')
      }else{
        alert('Thank you!')
      }
      
    }
  }
