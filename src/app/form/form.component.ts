import {Component} from "@angular/core";
import {Hero} from "./Hero";
import {isNumber} from "util";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submitted = false;
  hero = new Hero(1, 'xbf', 'coder');
  powers= ['police', 'doctor' , 'coder' , 'teacher' , 'other'];
  newHero() {
    this.hero = new Hero(2, ' ', ' ');
  }
  onSubmit() {
    this.submitted = true;
  }
}
