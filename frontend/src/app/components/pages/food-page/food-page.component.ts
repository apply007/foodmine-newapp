import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../../shared/models/food';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    foodService: FoodService,
    activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((param) => {
      if (param.id) {
        foodService.getAllFoodById(param.id).subscribe(res=>
         this.food=res 
         
          );
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
