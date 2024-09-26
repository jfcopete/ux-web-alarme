import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importa MatIconModule
import { MatButtonModule } from '@angular/material/button';  // Importa MatButtonModule
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-detailed-medication',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],  // Añadir MatIconModule aquí
  templateUrl: './view-detailed-medication.component.html',
  styleUrls: ['./view-detailed-medication.component.scss'],
})
export class ViewDetailedMedicationComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/view-medication']);
  }

  deleteMedication() {
    console.log('Eliminar medicamento');
    // Aquí puedes agregar la lógica para eliminar el medicamento
  }
}
