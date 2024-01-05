import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TouristSiteService } from "../../services/tourist-site.service";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { TouristSite } from "../../models/tourist-site";
import {
  TouristSiteItemComponent
} from "../tourist-site-item/tourist-site-item.component";
import { AsyncPipe } from "@angular/common";
import {
  TouristSiteItemSkeletonComponent
} from "../tourist-site-item-skeleton/tourist-site-item-skeleton.component";

@Component({
  selector: 'app-tourist-site-list',
  standalone: true,
  imports: [
    TouristSiteItemComponent,
    AsyncPipe,
    TouristSiteItemSkeletonComponent
  ],
  templateUrl: './tourist-site-list.component.html',
  styleUrl: './tourist-site-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TouristSiteListComponent implements OnInit {
  touristSite$: Observable<TouristSite[]> = of([])

  constructor(
    private readonly touristSiteService: TouristSiteService
  ) {
  }

  ngOnInit(): void {
    this.touristSite$ = this.touristSiteService.getTouristSites().pipe(
      map(touristSites => touristSites.reverse())
    );
  }
}
