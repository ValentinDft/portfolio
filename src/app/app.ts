import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Topbar} from './components/topbar/topbar';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
