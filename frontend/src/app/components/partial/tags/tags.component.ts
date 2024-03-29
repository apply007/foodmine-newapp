import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags: Tag[] = [];

  constructor(private foodService: FoodService) {
 foodService.getAllTags().subscribe(res=>
  this.tags=res
  );
  }
}
