import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-workspace',
  imports: [CardComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})

export class WorkspaceComponent {
    @Input({required: true}) name!: string;
}
