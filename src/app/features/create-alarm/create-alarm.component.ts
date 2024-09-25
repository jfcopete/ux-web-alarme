import { Component } from '@angular/core';
import { NavListComponent } from '../../shared/nav-list/nav-list.component';

@Component({
  selector: 'app-create-alarm',
  standalone: true,
  imports: [NavListComponent],
  templateUrl: './create-alarm.component.html',
  styleUrl: './create-alarm.component.scss'
})
export class CreateAlarmComponent {

}
