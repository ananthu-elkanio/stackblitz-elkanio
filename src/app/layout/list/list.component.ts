import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoading: boolean = false;
  userList: any;
  errorMessage: string = '';

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsersList().subscribe(
      (response) => {
        this.isLoading = false;
        this.userList = response.data;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error fetching user list.';
      }
    );
  }

}
