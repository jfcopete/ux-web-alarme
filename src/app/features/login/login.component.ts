import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
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
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // Inyectar Router en el constructor
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    if  (true) //(this.loginForm.valid) 
      {
      // Aquí puedes agregar la lógica de autenticación
      console.log('Autenticación exitosa');
      this.router.navigate(['/view-medication']); // Redirigir después de la autenticación
    } else {
      console.log('Formulario no válido');
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']); // Redirigir a la página de recuperación de contraseña
  }

  ngOnInit(): void {
    console.log('LoginComponent initialized');
  }

  onLogin() {
    this.login(); // Llamar al método login cuando se envíe el formulario
  }
}
