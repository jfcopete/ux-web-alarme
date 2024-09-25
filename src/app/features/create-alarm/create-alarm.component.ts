/*create-alarm.component.ts*/
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NavListComponent } from '../../shared/nav-list/nav-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from '../../app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-alarm',
  standalone: true,
  imports: [
    NavListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    AppComponent,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule
    
  ],
  templateUrl: './create-alarm.component.html',
  styleUrl: './create-alarm.component.scss',

})
export class CreateAlarmComponent {
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  // Arrays de horas y minutos
  hours: number[] = Array.from({ length: 12 }, (v, k) => k + 1); // 1 a 12
  minutes: number[] = Array.from({ length: 60 }, (v, k) => k); // 0 a 59

  // Variables para almacenar los valores seleccionados
  selectedHour: number = 12;
  selectedMinute: number = 0;
  selectedPeriod: string = 'AM';
}
