import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sendServer() {
    this._http.get<{ text: string }>('/api').subscribe((v) => {
      console.log(v);
    });
  }
  constructor(private readonly _http: HttpClient) {}
}