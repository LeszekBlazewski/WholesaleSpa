import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.scss']
})
export class EditCategoryModalComponent implements OnInit {

  @Input() category: Category;

  categoryEditForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryEditForm = this.formBuilder.group({
      categoryId: [this.category ? this.category.categoryId : 0],
      name: [this.category ? this.category.name : '', Validators.required]
    })
  }

  submitForm() {

    if (this.categoryEditForm.invalid) {

      if (this.categoryEditForm.controls.name.hasError('required'))
        this.categoryEditForm.controls.name.markAsDirty();

      return;
    }

    const category: Category = this.categoryEditForm.value;

    this.activeModal.close(category);
  }

  getErrorMessageCategoryName() {
    return this.categoryEditForm.controls.name.hasError('required') ? 'Name is required' : '';
  }

}
