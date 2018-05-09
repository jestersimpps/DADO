import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IpfsService } from '../ipfs.service';
declare let Buffer;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  loading = false;
  newFile: any;
  fileBuffer: any;
  newIpfsHash: string;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private ipfsService: IpfsService) {}

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.newFile = event.target.files[0];
      console.log(this.newFile);
      reader.readAsArrayBuffer(this.newFile);
      reader.onloadend = () => this.readTobuffer(reader);
    }
  }

  onSubmit() {
    this.loading = true;
    this.ipfsService.ipfs.files.add(
      {
        path: this.newFile.name,
        content: this.fileBuffer,
      },
      { wrap: true },
      (err, filesAdded) => {
        if (err) {
          console.error(err);
        }
        this.newIpfsHash = `https://ipfs.io/ipfs/${filesAdded[0].hash}`;
        this.loading = false;
      },
    );
  }

  readTobuffer(reader) {
    this.fileBuffer = Buffer.from(reader.result);
  }

  clearFile() {
    this.fileInput.nativeElement.value = '';
  }
}
