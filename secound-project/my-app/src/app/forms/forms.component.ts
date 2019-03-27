import { Component, OnInit } from '@angular/core';
import{ Forms } from '../forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent  implements OnInit {

  
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Forms(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
this.model = new Forms(42, '', '');
} 

  constructor() { }

  ngOnInit() {
  }

}

