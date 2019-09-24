import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  logoImg= "assets/img/logomirada.png";
  loadAPI: Promise<any>;
  constructor() {
   
  }

  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
     resolve(true);
 });
  }


  public loadScript() {
    // debugger;
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
