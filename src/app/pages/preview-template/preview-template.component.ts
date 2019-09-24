import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { mediaMailTemplateItems } from 'src/app/entity/mediamail';
@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {

  public templateSettings:mediaMailTemplateItems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( params =>{
      this.templateSettings=JSON.parse(params['template'])
    } );
  }

}
