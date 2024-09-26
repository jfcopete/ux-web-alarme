import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { MatCardModule } from '@angular/material/card';  // Importa MatCardModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-medication',
  standalone: true,
  imports: [CommonModule, MatCardModule],
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
    // Agrega más objetos de medicamentos aquí según sea necesario
  ];

  constructor(private router: Router) {}

  viewMore(medication: any) {
    console.log('Ver más detalles sobre:', medication);
    // Aquí puedes agregar la lógica para redirigir a la vista detallada del medicamento
    this.router.navigate(['/view-detailed-medication']);
  }
}
