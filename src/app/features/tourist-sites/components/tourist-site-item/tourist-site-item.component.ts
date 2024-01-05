import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';
import { TouristSite } from "../../models/tourist-site";
import { NgOptimizedImage } from "@angular/common";
import {
  FallbackImageDirective
} from "../../../../core/directives/fallback-image.directive";

@Component({
  selector: 'app-tourist-site-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FallbackImageDirective
  ],
  templateUrl: './tourist-site-item.component.html',
  styleUrl: './tourist-site-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TouristSiteItemComponent {
  @Input() touristSite: TouristSite | undefined
}

