import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { Sample_tags, foodData } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return foodData;
  }
  getAllFoodBySearchTerm(searchTerm: string): Food[] {

    return this.getAll().filter((food) =>
     {return food.name.toLowerCase().includes(searchTerm.toLowerCase())
     }
    );
  }

  getAllTags(): Tag[] {
    return Sample_tags;
  }
  getAllFoodByTag(foodTag: string): Food[] {
    return foodTag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(foodTag));
  }

  getAllFoodById(foodId: string ): Food  {
    // if (food.id === foodId) return food;
    // else return undefined;
    return foodData.find(food=>food.id===foodId)??new Food()
  }
}
