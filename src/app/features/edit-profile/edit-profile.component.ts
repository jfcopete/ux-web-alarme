import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavListComponent } from '../../shared/nav-list/nav-list.component';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NavbarComponent,
    FooterComponent,
    NavListComponent
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit {
  reabastecimientoForm!: FormGroup;
  perfilForm!: FormGroup;

  // Opciones de notificaciones
  notificaciones = [
    { nombre: 'Notificaciones de bolsillo', seleccionado: false },
    { nombre: 'Notificaciones por Whatsapp', seleccionado: false },
    { nombre: 'Notificaciones por mensaje de texto', seleccionado: false },
  ];

  // Opciones de notificaciones de reabastecimiento
  reabastecimiento = [
    { nombre: 'Reabastecimiento de medicamentos', seleccionado: false },
    { nombre: 'Notificación de 80%', seleccionado: false },
    { nombre: 'Recomendación de reabastecimiento', seleccionado: false },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Función para guardar los cambios del perfil
  guardarPerfil(): void {
    if (this.perfilForm.valid) {
      const datosPerfil = this.perfilForm.value;
      console.log('Datos del perfil:', datosPerfil);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    }
  }

  // Función para desactivar todas las notificaciones
  desactivarNotificaciones(): void {
    this.notificaciones.forEach((notificacion) => (notificacion.seleccionado = false));
  }

  // Función para desactivar todas las notificaciones de reabastecimiento
  desactivarReabastecimiento(): void {
    this.reabastecimiento.forEach((item) => (item.seleccionado = false));
  }

  // Función para guardar las preferencias de notificaciones
  guardarPreferencias(): void {
    const preferencias = {
      notificaciones: this.notificaciones
        .filter((n) => n.seleccionado)
        .map((n) => n.nombre),
      reabastecimiento: this.reabastecimiento
        .filter((r) => r.seleccionado)
        .map((r) => r.nombre),
    };
    console.log('Preferencias guardadas:', preferencias);
    // Aquí puedes agregar la lógica para enviar las preferencias al backend
  }

}
