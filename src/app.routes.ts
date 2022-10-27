import { Routes } from "@angular/router"
import { MenuComponent } from "./app/menu/menu.component";
import { SignUpComponent } from "./app/sign-up/sign-up.component";
import { UserProfileComponent } from "./app/user-profile/user-profile.component";


const ROUTES: Routes = [

    { path: "sign-up", component: SignUpComponent },

    { path: "user-profile", component: UserProfileComponent }
];

export { ROUTES };