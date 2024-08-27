import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  quantity: number = 0;
  user!: User;
  constructor(cartService: CartService, private userService: UsersService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.quantity = newCart.totalCount;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  logout() {
    this.userService.logout();
  }
  ngOnInit() {}
}
