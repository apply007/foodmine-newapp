import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    this.foods = foodService.getAll();
    activatedRoute.params.subscribe((param) => {
      if (param.searchTerm) {
        this.foods = this.foodService.getAllFoodBySearchTerm(param.searchTerm);
      
      }

     else if (param.tag) {
        this.foods = this.foodService.getAllFoodByTag(param.tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
