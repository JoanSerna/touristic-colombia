import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tourist-site-item-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './tourist-site-item-skeleton.component.html',
  styleUrl: './tourist-site-item-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TouristSiteItemSkeletonComponent {
  @Input()animate = false
}
