import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css'],
})
export class BranchesComponent implements OnInit {
  searchTerm!: string;
  branches: Branch[] = [];
  constructor(private branchesService: BranchesService) {}

  ngOnInit(): void {
    this.branchesService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }
  search() {
    this.branchesService.getBranches().subscribe((data) => {
      this.branches = data.filter((branch) => {
        return branch.name
          .toLowerCase()
          .includes(this.searchTerm.trim().toLowerCase());
      });
    });
  }
}
