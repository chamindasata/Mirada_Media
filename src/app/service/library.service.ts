import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FolderContent, Folder } from './../entity/libraray';

@Injectable({
  providedIn: 'root'
})
export class LibraryService  {

  folders: any = null
  appUrl: string = environment.apiUrl;

  constructor(public httpClient:HttpClient) { }

  ////ASSETS///
  getAssets () {
    return this.httpClient.get(this.appUrl + 'entityAssets');
  }

  addNewAsset(formData) {
    return this.httpClient.post(this.appUrl+ 'entityAssets', formData );
  }


  ////FOLDERS//

  getAssetFolders() {
    return this.httpClient.get(this.appUrl + 'assetfolders');
  }

  addNewFolder(folderName: string): Observable<any> {
    return this.httpClient.post<any>(this.appUrl + 'assetfolders',
      {
        folder_name: folderName,
        enable_share: 1
      }
    );
  }

  deleteFolder(folderId: number, folder: any): Observable<any> {
    return this.httpClient.post(this.appUrl + 'assetfolders/' + folderId, folder);
  }

  getFolderContent(folderId: number) {
    return this.httpClient.get<FolderContent>(this.appUrl + 'assetfolders/' + folderId)
  }


  
}
