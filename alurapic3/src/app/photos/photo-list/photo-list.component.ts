import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photosServer: any = [];
  constructor(
    private activatedRout: ActivatedRoute,
    private photoService: PhotoService) {}

  ngOnInit(): void {
    const userName = this.activatedRout.snapshot.params.userName;
    this.photoService
      .UserList(userName)
      .subscribe(
        photos => {
          console.log(photos[0].id);
          console.log(photos);
          this.photosServer = photos;
        },
          error => {
          console.log(error);
        }
      );
  }
}
