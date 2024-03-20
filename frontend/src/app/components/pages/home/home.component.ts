import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodObservable: Observable<Food[]>;

    // foodObservable = foodService.getAll();
    activatedRoute.params.subscribe((param) => {
      if (param.searchTerm) {
        foodObservable = this.foodService.getAllFoodBySearchTerm(
          param.searchTerm
        );
      } else if (param.tag) {
        foodObservable = this.foodService.getAllFoodByTag(param.tag);
      } else {
        foodObservable = this.foodService.getAll();
      }
      foodObservable.subscribe((serverFood) => {
        this.foods = serverFood;
      });
    });
  }

  ngOnInit(): void {}
}
