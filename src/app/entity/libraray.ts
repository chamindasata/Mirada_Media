export interface AssetFolder {
  user_id: number,
  folder_name: string,
  enable_share: number,
  universe_id: number,
  updated_at: string,
  created_at: string,
  id: number,
  user: {
    id: number,
    Username: string,
    Email: string,
    Reset: number,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    Suspended: number,
  },
  universe: {
    id: number,
    Email: string,
    Subdomain: string,
    Notes: string,
    MaxUsers: number,
    Initialized: number,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    AccountingEnabled: number,
    AppEnabled: number,
    stripe_id: number
    card_brand: string,
    card_last_four: number,
    trial_ends_at: string,
    subscription_exempt: number,
  }
}

export interface FolderContent {

  id: number,
  folder_name: string,
  user_id: number,
  universe_id: number,
  created_at: string,
  updated_at: string,
  deleted_at: null,
  enable_share: number,
  url: string,
  assets: [],
  universe: {
    id: number,
    Email: string,
    Subdomain: string,
    Notes: string,
    MaxUsers: number,
    Initialized: number,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    AccountingEnabled: number,
    AppEnabled: number,
    stripe_id: number
    card_brand: string,
    card_last_four: number,
    trial_ends_at: string,
    subscription_exempt: number,
  }
}

export interface Asset 
  {
    id: number,
    AssetName: string,
    mime_content_type: string,
    OriginalFilename: string,
    Notes: string,
    AwsFileName: string,
    universe_id: number,
    user_id: number,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    folder_id: number,
    links: [],
    downloadUrl: string,
    viewUrl: string,
    mpwFile: string,
    hasSong: boolean
}

export interface Folder {
  created_at: string,
  deleted_at: string,
  enable_share: number,
  folder_name: string,
  id: number,
  universe_id: number,
  updated_at: string,
  user_id: number,
}
