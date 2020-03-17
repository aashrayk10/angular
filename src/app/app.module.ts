import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ReicpeItemComponent } from './recipes/recipelist/reicpe-item/reicpe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShppingEditComponent } from './shopping-list/shpping-edit/shpping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   RecipesComponent,
   RecipelistComponent,
   RecipeDetailComponent,
   ReicpeItemComponent,
   ShoppingListComponent,
   ShppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
