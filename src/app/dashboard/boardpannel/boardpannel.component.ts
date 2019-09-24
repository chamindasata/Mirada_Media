import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/service/audio.service';

@Component({
  selector: 'app-boardpannel',
  templateUrl: './boardpannel.component.html',
  // template:"hello",
  styleUrls: ['./boardpannel.component.css']
})
export class BoardpannelComponent implements OnInit {

  public photo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g-eazy.png';
  public topSongPhoto = '../assets/img/emi.jpg';
  constructor(public _audioService:AudioService) { }
  loadAPI: Promise<any>;


  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      // this.loadScript();
      resolve(true);
  });
  }

  playMusic(){
   
    let song= {name: 'Song Tittle', id: 0, uri: 'https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav'};
    this._audioService.playSong(song)
  }

  

  public loadScript() {
   
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
            isFound = true;
        }
    }

    if (!isFound) {

        const dynamicScripts = ['../assets/js/jquery.min.js', '../assets/js/nouislider.min.js', '../assets/js/index.js', '../assets/js/bootstrap.min.js'];

        for (let i = 0; i < dynamicScripts .length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}

}
