import { Component } from '@angular/core';

import { WorkspaceComponent } from '../workspace/workspace.component';

@Component({
  selector: 'app-board',
  imports: [ WorkspaceComponent ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
