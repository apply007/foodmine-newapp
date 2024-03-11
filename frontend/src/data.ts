import { Food } from './app/shared/models/food';
import { Tag } from './app/shared/models/tag';

export const foodData: Food[] = [
  {
    id: '1',
    name: 'Burger',
    price: 50,
    tags: ['Soup', 'firstfood'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '2',
    name: 'Pizza',
    price: 50,
    tags: ['Soup', 'firstfood'],
    favorite: true,
    stars: 4.0,
    imageUrl: 'assets/food-2.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '3',
    name: 'ChickenFry',
    price: 50,
    tags: ['Soup', 'SlowFood'],
    favorite: true,
    stars: 4.0,
    imageUrl: 'assets/food-3.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '4',
    name: 'Lobstar',
    price: 50,
    tags: ['Soup', 'SlowFood'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-4.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '5',
    name: 'Curry',
    price: 50,
    tags: [ 'SlowFood'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-5.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '6',
    name: 'Cock',
    price: 50,
    tags: ['Soup', 'SlowFood'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '7',
    name: 'FriedRice',
    price: 50,
    tags: ['Soup', 'SlowFood'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
];

export const Sample_tags: Tag[] = [
  {
    name: 'All',
    count: 12,
  },
  {
    name: 'firstfood',
    count: 12,
  },
  {
    name: 'Pizza',
    count: 2,
  },
  {
    name: 'Lunch',
    count: 20,
  },
  {
    name: 'Slow Food',
    count: 2,
  },
  {
    name: 'Ham Burger',
    count: 2,
  },
  {
    name: 'Fry',
    count: 7,
  },
  {
    name: 'Soup',
    count: 8,
  },
];
