import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-board';
}
