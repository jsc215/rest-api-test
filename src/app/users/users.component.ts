import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
   this.dataService.getUsers().subscribe((users) => (this.users = users));
  }
}
