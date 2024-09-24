import { Routes } from '@angular/router';
import { CreateAlarmComponent } from './features/create-alarm/create-alarm.component';
import { EditProfileComponent } from './features/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { LandingComponent } from './features/landing/landing.component';
import { ViewDetailedMedicationComponent } from './features/view-detailed-medication/view-detailed-medication.component';
import { ViewMedicationComponent } from './features/view-medication/view-medication.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'view-detailed-medication', component: ViewDetailedMedicationComponent },
    { path: 'view-medication', component: ViewMedicationComponent },
    { path: 'create-alarm', component: CreateAlarmComponent },
];
