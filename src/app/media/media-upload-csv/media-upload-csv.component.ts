import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-upload-csv',
  templateUrl: './media-upload-csv.component.html',
  styleUrls: ['./media-upload-csv.component.css']
})
export class MediaUploadCsvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // files: any = [];

  // uploadFile(event) {

  //   // debugger;
  //   // for (let index = 0; index < event.length; index++) {
  //   //   const element = event[index];
  //   //   this.files.push(element.name)
  //   // }  
  // }
  // deleteAttachment(index) {
  //   this.files.splice(index, 1)
  // }
  
  // title = 'csvTOjson works!';
   text: any;
  // JSONData: any;

  public csvGridData:any[]=[];

  columns:any=[];
  isCsvGridData:boolean=false;
  //   csvJSON(csvText) {
  //     var lines = csvText.split("\n");

  //     var result = [];

  //     var headers = lines[0].split(",");
  //     console.log(headers);
  //     for (var i = 1; i < lines.length-1; i++) {

  //         var obj = {};
  //         var currentline = lines[i].split(",");

  //         for (var j = 0; j < headers.length; j++) {
  //             obj[headers[j]] = currentline[j];
  //         }

  //         result.push(obj);

  //     }

  //     //return result; //JavaScript object
  //     console.log(JSON.stringify(result)); //JSON
  //     this.JSONData = JSON.stringify(result);

  //  }


  uploadFile(input) {
    console.log(input);
  

    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
      let text = reader.result;
      this.text = text;
      console.log(text);
      this.csvJSON(text);
      // console.log(abc);
    };

  }



  //var csv is the CSV file with headers
  csvJSON(csv) {

    var clean_csv = csv.replace(/(?:\r\n|\r|\n)/g, '|'); // deal with inconsistent return characters Mac/Win/Unix - replace all with '|'
    var lines = clean_csv.split("|");

    // let lines=csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");
    this.columns=headers;
    console.log(this.columns);

    for (var i = 1; i < lines.length; i++) {

      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }

    //return result; //JavaScript object
    // this.csvGridData= JSON.stringify(result);
    this.csvGridData=result;
   // return JSON.stringify(result); //JSON
   console.log(this.csvGridData);
  
  
  }



}
