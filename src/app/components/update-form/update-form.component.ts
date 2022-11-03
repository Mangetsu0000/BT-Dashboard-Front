import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BranchesService } from 'src/app/services/branches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchToEdit } from 'src/app/models/branch-to-edit';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  form!: FormGroup;
  @Input() branchToEdit!: BranchToEdit;
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
