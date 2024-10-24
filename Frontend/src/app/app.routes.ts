import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JuegoComponent } from './components/juego/juego.component';
import { UserComponent } from './components/users/users.component';


export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'juego', component: JuegoComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }

];
