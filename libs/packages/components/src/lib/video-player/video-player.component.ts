import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';
import * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';
import { VPInterface } from './video-player';

interface InitPxVideoConfig {
  "videoId": string,
  "captionsOnDefault": boolean,
  "seekInterval": number,
  "videoTitle": string,
  "debug": boolean
}

declare const GLOBAL_STRINGS: any;

declare class InitPxVideo {
  constructor(config: InitPxVideoConfig);
}

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {
  @Input() VPConfiguration: VPInterface;
  private config: InitPxVideoConfig;

  @Input() crossorigin = "";
  ngAfterViewInit() {
    if (this.crossorigin) {
      const id = document.getElementById('videoPlayer');
      id.setAttribute('crossorigin', this.crossorigin);
    }
    this.config = {
      videoId: this.VPConfiguration.id,
      captionsOnDefault: false,
      seekInterval: this.VPConfiguration.seekInterval,
      videoTitle: 'Video Player',
      debug: this.VPConfiguration.debug
    }

    new InitPxVideo(this.config);
  }

  constructor() {
}

}
