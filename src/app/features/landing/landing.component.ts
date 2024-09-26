import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    FooterComponent,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
