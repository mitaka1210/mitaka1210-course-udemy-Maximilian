import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Recipe} from '../../recipe.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onRecipeSelected() {
    this.recipeSelected.emit();
  }
}
