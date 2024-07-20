import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export class User {
  constructor(public _id = '', public name = '', public age = 0) {}
}

@Component({
  selector: 'app-vd15-http-client-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vd15-http-client-component.component.html',
  styleUrls: ['./vd15-http-client-component.component.css']
})
export class Vd15HttpClientComponentComponent implements OnInit {
  apiLink = 'https://crudcrud.com/api/a3d8c736fe7646538caf3426dcff780d/unicorns';
  listUser: User[] = [];
  selectedUser = new User();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get<User[]>(this.apiLink)
      .subscribe(res => this.listUser = res);
  }

  createUser(name: string, age: number) {
    this.http.post(this.apiLink, { name, age })
      .subscribe(() => this.getUser());
  }

  updateUser(id: string, name: string, age: number) {
    this.http.put(`${this.apiLink}/${id}`, { name, age })
      .subscribe(() => this.getUser());
    this.selectedUser._id = '';
  }

  deleteUser(id: string) {
    this.http.delete(`${this.apiLink}/${id}`)
      .subscribe(() => this.getUser());
  }
}
