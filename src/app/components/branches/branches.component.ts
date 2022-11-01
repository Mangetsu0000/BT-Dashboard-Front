import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
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
  constructor(private branchesService: BranchesService) {}

  ngOnInit(): void {
    this.branchesService.getBranches().subscribe((data) => {
      this.branches = data;
      console.log(data);
    });
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
  onToggleCreate() {
    this.creating = !this.creating;
  }
  onFormSubmit() {
    this.creating = false;
  }
}
