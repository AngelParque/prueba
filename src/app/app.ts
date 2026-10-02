import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Primercomponente } from './components/primercomponente/primercomponente';
import { Segundocomponentew } from './components/segundocomponentew/segundocomponentew';

@Component({
  imports: [RouterOutlet,Primercomponente, Segundocomponentew],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prueba');
}
