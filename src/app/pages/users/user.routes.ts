import {Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';
import { authGuard } from 'src/app/guards/auth.guard';



export const UserRoutes: Routes = [{
    path:'',
    children: [
        {
            path:'',
            component: UserListComponent
        },
        {
            path:'user/:id',
            component: UserFormComponent
        }
    ], canActivate: [authGuard]
}]