import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { BranchToEdit } from 'src/app/models/branch-to-edit';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css'],
})
export class BranchesComponent implements OnInit {
  searchTerm!: any;
  branches: Branch[] = [];
  creating: boolean = false;
  editing: boolean = false;
  branchToEdit!: BranchToEdit;
  buttonText!: string;
  constructor(private branchesService: BranchesService) {}

  ngOnInit(): void {
    this.getData();
  }
  search() {
    if (this.searchTerm) {
      this.branchesService.getBranches().subscribe((data) => {
        this.branches = data.filter((branch) => {
          return branch.bc == this.searchTerm;
        });
      });
    } else {
      this.branchesService.getBranches().subscribe((data) => {
        this.branches = data;
        console.log(data);
      });
    }
  }
  getData() {
    this.branchesService.getBranches().subscribe((data) => {
      this.branches = data;
      return data;
    });
  }
  onToggleCreate() {
    this.buttonText = 'Create';
    this.creating = !this.creating;
  }
  onFormSubmit(form: any) {
    if (this.creating) {
      this.branchesService.createBranch(form).subscribe((res) => {
        this.branches.push(res);
        this.creating = false;
      });
    } else if (this.editing) {
      this.buttonText = 'Edit';
      this.branchesService
        .editBranch(this.branchToEdit.id!, form)
        .subscribe(() => {
          this.branchesService.getBranches().subscribe(() => {
            this.branches.sort((a, b) => a.id! - b.id!);
            this.editing = false;
          });
        });
    }
  }
  onDelete(branchId: number) {
    this.branchesService.deleteBranch(branchId).subscribe(() => {
      this.getData();
    });
  }
  onEdit(branch: BranchToEdit) {
    this.branchToEdit = branch;
    console.log(this.branchToEdit.name);
    this.editing = true;
    this.buttonText = 'Update';
  }
  onFormCancel(status: boolean) {
    this.creating = status;
    this.editing = status;
  }
}
