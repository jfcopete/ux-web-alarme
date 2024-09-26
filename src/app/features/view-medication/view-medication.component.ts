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
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-medication',
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
  templateUrl: './view-medication.component.html',
  styleUrl: './view-medication.component.scss'
})

export class ViewMedicationComponent {
  medications = [
    {
      name: 'Nombre del medicamento',
      subGroup: 'SubGrupo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Title',
      subGroup: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Title 3',
      subGroup: 'Subtitle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    // Agrega más objetos de medicamentos aquí según sea necesario
  ];

  constructor(private router: Router) {}

  viewMore(medication: any) {
    console.log('Ver más detalles sobre:', medication);
    // Aquí puedes agregar la lógica para redirigir a la vista detallada del medicamento
    this.router.navigate(['/view-detailed-medication']);
  }
}
