import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchesService } from 'src/app/services/branches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchToEdit } from 'src/app/models/branch-to-edit';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  form!: FormGroup;
  @Output() formSubmitEvent = new EventEmitter<boolean>();
  @Output() formCancelEvent = new EventEmitter<boolean>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      bc: ['', Validators.required],
      ttIpAddress: ['', Validators.required],
      orangeIpAddress: ['', Validators.required],
    });
  }
  submit() {
    this.formSubmitEvent.emit(this.form.getRawValue());
  }
  onCancel() {
    this.formCancelEvent.emit(false);
  }
}
