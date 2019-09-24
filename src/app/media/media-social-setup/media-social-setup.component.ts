import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediaPlayerService } from 'src/app/service/media-player.service';
import { MediaSocialSetup } from 'src/app/entity/mediamail';

@Component({
  selector: 'app-media-social-setup',
  templateUrl: './media-social-setup.component.html',
  styleUrls: ['./media-social-setup.component.css']
})
export class MediaSocialSetupComponent implements OnInit {

  socialSetup = new FormGroup({
    twitter: new FormControl(),
    twitterUrl: new FormControl(),
    instagramUrl: new FormControl(),
    instagram: new FormControl(),
    Facebook: new FormControl(),
    FacebookUrl: new FormControl(),
    Website: new FormControl(),
    WebsiteUrl:new FormControl()

  });

public socialConfigurations:MediaSocialSetup;

  public isShowContact;
  public isShowAddress;

  constructor(public mediaPlayerService: MediaPlayerService) { }

  ngOnInit() {
  }

  checkShowContact(event) {
   
    if (event == "true") {
      this.socialSetup.addControl('contact_firstNameLastName', new FormControl(''));
      this.socialSetup.addControl('contact_PhoneNumber', new FormControl(''));
      this.socialSetup.addControl('contact_EmailAddress', new FormControl(''));
    }
    
  }

  checkShowAddress(event) {
    if (event == "true") {
      this.socialSetup.addControl('Address1', new FormControl(''));
      this.socialSetup.addControl('Address2', new FormControl(''));
      this.socialSetup.addControl('city', new FormControl(' '));
      this.socialSetup.addControl('state', new FormControl(' '));
      this.socialSetup.addControl('zipcode', new FormControl(''));
    }
  }

  save(values) {
    console.log(values);
  }


  saveEmit(){
   console.log(this.socialSetup.value);
    this.socialConfigurations=this.socialSetup.value;
    this.socialConfigurations.isShowContact=this.isShowContact;
    this.socialConfigurations.isShowAddress=this.isShowAddress;
    this.mediaPlayerService.socialConfigure(this.socialConfigurations);
   
  }


}
