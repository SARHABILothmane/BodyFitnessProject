import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {

  @Input() banner!: Banner;
  showAd = environment.adsense.show;
  constructor() { }

  // ngOnInit(): void {
  // }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        // let test = (window as { [key: string]: any })["DataManager"] as string;
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({
          overlays: { bottom: true }
        })
        // (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
        //     overlays: {bottom: true}
        // });
      } catch (e) {
        console.error(e);
      }
    }, 0);
  }
}
