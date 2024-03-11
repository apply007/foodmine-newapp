import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((param) => {
      if (param.searchTerm) {
        this.searchTerm = param.searchTerm;
      }
    });
  }

search(search:string){
  if (search) {
    this.router.navigate([`/search/${search}`])
    
  }
  else{this.router.navigate([`/`])}
}

}
