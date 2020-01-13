import { Component, OnInit, Input, IterableDiffers, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar, MatTable } from '@angular/material';
import { EditCategoryModalComponent } from '../edit-category-modal/edit-category-modal.component';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';


@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  @Input() categories: Category[];

  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  displayedColumns: string[] = ['categoryId', 'categoryName', 'action'];

  constructor(private modalService: NgbModal,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  rowUpdateClick(element: Category) {
    const modalRef = this.modalService.open(EditCategoryModalComponent);
    const categoryCopy: Category = <Category>{
      categoryId: element.categoryId,
      name: element.name
    };
    modalRef.componentInstance.category = categoryCopy;

    modalRef.result.then((updatedCategory) => {
      this.categoryService.updateCategory(updatedCategory).subscribe(resp => {
        const objectIndex = this.categories.findIndex(c => c.categoryId == updatedCategory.categoryId);
        this.categories.splice(objectIndex, 1, updatedCategory);
        this.table.renderRows();
        this.snackBar.open('Category updated successfuly', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      },
        (error) => {
          this.snackBar.open(`Couldn't update product`, null, {
            duration: 2000,
            horizontalPosition: "right"
          });
        });
    }, (rejectedReason) => { })
  }

  rowDeleteClick(element: Category) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.modalHeader = 'Delete category';
    modalRef.componentInstance.modalBody = `Are you sure you want to delete category with ID: ${element.categoryId} ?`;
    modalRef.componentInstance.modalWarning = 'All products which correspond to this category will not have any category set !';

    modalRef.result.then(() => {
      this.categoryService.deleteCategory(element).subscribe(() => {
        let objectIndex = this.categories.findIndex(p => p.categoryId === element.categoryId);
        this.categories.splice(objectIndex, 1);
        this.table.renderRows();
        this.snackBar.open('Category has been removed !', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      })
    }, (rejectedReason) => { });

  }

  addNewCategory() {
    const modalRef = this.modalService.open(EditCategoryModalComponent);
    modalRef.result.then((newCategory) => {
      this.categoryService.addCategory(newCategory).subscribe(addedCategory => {
        this.categories.push(addedCategory);
        this.table.renderRows();
        this.snackBar.open('Category added successfuly', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      },
        (error) => {
          this.snackBar.open(`Couldn't add new category`, null, {
            duration: 2000,
            horizontalPosition: "right"
          });
        });
    }, (rejectedReason) => { })
  }


}
