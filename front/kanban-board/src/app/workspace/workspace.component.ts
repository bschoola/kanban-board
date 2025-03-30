import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workspace',
  imports: [],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})

export class WorkspaceComponent {
    @Input({required: true}) name!: string;
}
