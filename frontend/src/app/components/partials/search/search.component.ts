import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  search(searchTerm: string): void {
    if (searchTerm) this.router.navigateByUrl('/search/' + searchTerm);
  }
  ngOnInit(): void {}
  constructor(activatedRoute: ActivatedRoute, private router: Router) {}
}
