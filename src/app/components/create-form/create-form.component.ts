import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BranchesService } from 'src/app/services/branches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  form!: FormGroup;
  userId: number = 1;
  @Output() formSubmitEvent = new EventEmitter<boolean>();
  constructor(
    private formBuilder: FormBuilder,
    private branchesService: BranchesService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      bc: ['', Validators.required],
      ttIpAddress: ['', Validators.required],
      orangeIpAddress: ['', Validators.required],
    });
  }
  submit(): void {
    this.branchesService.createBranch(this.userId, this.form.getRawValue());
    this.formSubmitEvent.emit();
  }
}
