import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';

import {
  UserStateService,
  UserStateVM,
} from '../common';
import { ProfileService } from '../profile';
import { UserRole } from '../users';
import { DashboardService } from './dashboard.service';
import { MENU } from './data';
import { optionMenu } from './models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  title = 'Helados Dominic';

  optionList: Array<optionMenu> = [];

  pages = [
    {
      path: '/dashboard/exam-types',
      title: 'Tipos de examen',
    },
    {
      path: '/dashboard/exams',
      title: 'Examenes',
    },
    {
      path: '/dashboard/studies',
      title: 'Estudios',
    },
    {
      path: '/dashboard/patients',
      title: 'Pacientes',
    },
    {
      path: '/dashboard/statistics',
      title: 'Estadísticas',
    },
    {
      path: '/dashboard/users',
      title: 'Usuarios',
    },
    {
      path: '/dashboard/profile',
      title: 'Mi Perfil',
    },
    {
      path: 'dashboard/studies/form',
      title: 'Formulario de estudio',
    }
  ];

  sub$ = new Subscription();
  user: UserStateVM = {
    email: 'user@user.com',
    firstName: 'Administrador',
    lastName: '',
    id: 0,
    idDocument: '0',
    name: '',
    role: UserRole.Super,
    loginStamp: 0,
    roleText: 'Super',
  };

  optionProfile: optionMenu = {
    icon: '',
    name: 'Mi Perfil',
    permissions: [],
    value: 'profile'
  };

  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private dashboardService: DashboardService,
    private profileService: ProfileService,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.updateTitle(this.router.url);
    this.sub$.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateTitle(event.url);
        }
      })
    );
    this.user = this.userStateService.getUser() as any;
    this.sub$.add(
      this.userStateService.getUser$().subscribe((user) => {
        if (user) {
          this.user = user;
        }
      }
      )
    );
    const role = this.userStateService.getRole();
    if (role) {
      this.optionList = MENU.filter((item) => (item.permissions.includes(role as any)))
      .sort((a, b) => {
        let sort = 0;
        if (a.name > b.name) {
          sort = 1;
        } else if (a.name < b.name) {
          sort = -1;
        }
        
        return sort;
      }
      );
      this.optionList.unshift({
        name: 'Inicio',
        value: 'home',
        icon: 'store',
        permissions: [UserRole.Super],
      },);
      this.optionList.push({
        name: 'Salir',
        icon: 'logout',
        permissions: [],
        value: 'logout',
      });
    }
    
  }

  menuOption(option?: optionMenu): void {
    if (option && option.name === 'Salir') {
      this.logout();
    } else if (option) {
      this.router.navigate([`/dashboard/${option.value}`]);
    } else if (!option) {
      this.title = 'Helados Dominic';
    }
  }

  private updateTitle(url: string): void {
    const item = this.pages.find((page) => page.path === url);
    if (item) {
      this.title = item.title;
    } else {
      this.title = 'Helados Dominic';
    }
  }

  logout(): void {
    this.dashboardService.logout();
  }

  showProfile(): void{
    this.profileService.showProfileModal();
  }


  showChangePassword(): void{
    this.profileService.showChangePasswordModal();
  }
}
