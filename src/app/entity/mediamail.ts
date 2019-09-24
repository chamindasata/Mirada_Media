


export interface MediaConfigureSetup{
    isPublic:boolean;
    title:string;
    projectName:string;
    artistName:string;
    theme:string;
    image?:any;
}


export interface MediaSocialSetup {
    twitter: boolean;
    twitterUrl: string;
    instagramUrl: boolean;
    instagram: string;
    Facebook: boolean;
    FacebookUrl: string;
    Website: string;
    WebsiteUrl: string;
    contact_firstNameLastName?: string;
    contact_PhoneNumber?: string;
    contact_EmailAddress?: string;
    Address1?: string;
    Address2?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    isShowContact?:boolean;
    isShowAddress?:boolean;
}


export interface MediaShareSetup{
    sendDate:Date;
    deactivate:Date;
    From:string;
    Subject:string;
    emailText:string;
    emailSignature?:string;
}


export interface MediaMailSetup{
    mediaConfigureSetup?:MediaConfigureSetup;
    mediaSocialSetup?:MediaSocialSetup;
    mediaSharsetup?:MediaShareSetup;



}

export interface templateComponents{

    name: any;
    text?: string;
    column?:  string;
    details?: any;
}


export interface mediaMailTemplateItems{
    mediaConfigureSetup?:MediaConfigureSetup;
    mediaSocialSetup?:MediaSocialSetup;
    templateComponents?:templateComponents[];

}


export interface mediaMailList{
     id:number
     display_name:string;
     created_at:string;
     is_dtafted:number;
     entity_asset_id:any,
     totalPlays:number,
     activateCount:number,
     sentmediamail:number;
     type:any;
     Songs:any;
     CoverImage:any;
}