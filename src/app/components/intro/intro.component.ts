import { Component } from '@angular/core';
import { APP_NAME } from "../../constants";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  protected readonly APP_NAME = APP_NAME;
}
