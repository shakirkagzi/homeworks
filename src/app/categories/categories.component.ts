import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    this._router.navigate(['dashboard']);
  }
}
