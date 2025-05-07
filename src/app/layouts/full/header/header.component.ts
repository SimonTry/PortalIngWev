import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
  ],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();

  constructor(private router: Router, private alertService: AlertService){}

  logOut(){
    this.alertService.alertaConCorfirmacion("Cuidadito", "¿Seguro que desea cerrar sesión?").then((objAlert) =>{
      if(objAlert.isConfirmed){
        localStorage.removeItem('AuthToken');
        this.router.navigate(['/authentication/login'])
      }
    })
  }
}