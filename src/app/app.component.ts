import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditProfileComponent } from './features/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { LandingComponent } from './features/landing/landing.component';
import { ViewDetailedMedicationComponent } from './features/view-detailed-medication/view-detailed-medication.component';
import { ViewMedicationComponent } from './features/view-medication/view-medication.component';
import { CreateAlarmComponent } from './features/create-alarm/create-alarm.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from "./shared/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    ForgotPasswordComponent,
    EditProfileComponent,
    ViewDetailedMedicationComponent,
    ViewMedicationComponent,
    CreateAlarmComponent,
    MatIconModule,
    FooterComponent,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ux-web-alarme';
}
