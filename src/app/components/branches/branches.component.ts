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
      this.branches.sort((a, b) => {
        return a.bc - b.bc;
      });
      return data;
    });
  }
  onToggleCreate() {
    this.creating = true;
  }
  onFormSubmit(form: any) {
    if (this.creating) {
      this.branchesService.createBranch(form).subscribe(() => {
        this.getData();
        this.creating = false;
      });
    } else if (this.editing) {
      this.branchesService
        .editBranch(this.branchToEdit.id!, form)
        .subscribe(() => {
          this.getData();
          this.editing = false;
        });
    }
  }
  onDelete(branchId: number) {
    this.branchesService.deleteBranch(branchId).subscribe(() => {
      this.getData();
    });
  }
  onEdit(branch: BranchToEdit) {
    this.editing = true;
    this.branchToEdit = branch;
    console.log(this.branchToEdit!.name!);
  }
  onFormCancel(status: boolean) {
    this.creating = status;
    this.editing = status;
  }
}
