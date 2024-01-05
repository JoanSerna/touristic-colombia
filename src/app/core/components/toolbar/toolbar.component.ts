import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

}
