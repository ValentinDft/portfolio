import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Projects} from './pages/projects/projects';
import {Timelife} from './pages/timelife/timelife';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'projects', component: Projects},
  {path: 'timelife', component: Timelife},
];
