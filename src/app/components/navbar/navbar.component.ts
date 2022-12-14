import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
}
