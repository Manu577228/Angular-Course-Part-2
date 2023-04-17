import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray: Array<any> = [];

  stepForm: string;

  isActive: boolean = true;
  isAct: boolean = true;

  //Task

  name: string;
  email: string;
  address: string;
  userArray: Array<any> = [];

  //

  title: string = 'Angular Course';

  count: number = 234556;

  dcValue: number = 79.645456;

  price: number = 99.99;

  today: Date = new Date();

  postObj : object = {
    id: 1,
    postTitle : "Post 1"
  }

  postArrayElements : Array<string> = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6"
  ]

  userDetails = {
    name: "User 1",
    city: "NewYork",
    countryCode: "US"
  }

  dummyText: string = "Hi, I am manu Bharadwaj just wanted to ask how are you guys?"

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'post 6' });
  }

  onDelete(index) {
    this.objArray.splice(index, 1);
  }

  onClick(status) {
    this.stepForm = status;
  }

  onClicked() {
    this.userArray.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.userArray);
  }

  onRemove(index) {
    this.userArray.splice(index, 1);
  }
}
