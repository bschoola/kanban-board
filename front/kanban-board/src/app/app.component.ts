import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { BoardComponent } from "./board/board.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BoardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-board';
}
