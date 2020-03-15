import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  confirmPassword: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  register(): void {
    if (this.user.password === this.confirmPassword) {
      this.userService.saveUser(this.user).subscribe(user => this.user = user);
    }
  }
}
