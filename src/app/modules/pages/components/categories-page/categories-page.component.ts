import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/modules/use-categories/components/models/categories-model';
@Component({
  selector: 'nwp-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.less'],
})
export class CategoriesPageComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    this.categories.push(
      {
        id: 1,
        categoryName: 'רכב',
        categoryUserEmail: 'rr@gmail.com',
        isSelected: false,
      },
      {
        id: 2,
        categoryName: 'קריירה',
        categoryUserEmail: 'kkk@gmail.com',
        isSelected: false,
      },
      {
        id: 3,
        categoryName: 'כלכלה',
        categoryUserEmail: 'ccc@gmail.com',
        isSelected: false,
      },
      {
        id: 4,
        categoryName: 'פוליטיקה',
        categoryUserEmail: 'ppp@gmail.com',
        isSelected: false,
      }
    );
  }

  public categories: ICategory[] = [];
  public selectedCategories: number | null = null;
  public maxSelected: number = 3;
  public selectedCatgories: ICategory[] = [];

  public selectedCategory(category: ICategory): void {
    if (category !== null) {
      const index = this.selectedCatgories.indexOf(category);
      debugger;
      if (
        this.selectedCatgories.length < this.maxSelected &&
        !this.selectedCatgories.includes(category)
      ) {
        this.selectedCatgories.push(category);
      } else {
        if (index >= 0) {
          this.selectedCatgories.splice(index, 1);
        }
      }
    }
  }
  onSubmit(): void {
    if (this.selectedCatgories.length === 0) {
      alert('יש לבחור לפחות קטגוריה אחת');
    } else if (this.selectedCatgories.length > this.maxSelected) {
      alert(`יש לבחור עד ${this.maxSelected} קטגוריות בלבד`);
    } else {
      alert(`הקטגוריות שנבחרו הן: ${this.selectedCatgories.join(', ')}`);
    }
  }
}
