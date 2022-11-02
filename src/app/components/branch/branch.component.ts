import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { window } from 'rxjs';
import { Branch } from 'src/app/models/branch';
import { BranchToEdit } from 'src/app/models/branch-to-edit';
import { BranchesService } from 'src/app/services/branches.service';
import { PingService } from 'src/app/services/ping.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  @Input() branch!: Branch;
  @Output() branchDeleteEvent = new EventEmitter<number>();
  @Output() editBranchEvent = new EventEmitter<BranchToEdit>();

  testIp: string = '192.168.1.16';
  orangeConnected!: boolean;
  ttConnected!: boolean;
  constructor(
    private ping: PingService,
    private branchesService: BranchesService
  ) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.ping.pingBranch(this.branch.orangeIpAddress).subscribe((res) => {
    //     this.orangeConnected = res;
    //   });
    //   this.ping.pingBranch(this.branch.ttIpAddress).subscribe((res) => {
    //     this.ttConnected = res;
    //   });
    // }, 1000);
  }
  onDelete() {
    this.branchDeleteEvent.emit(this.branch.id);
  }
  onEdit() {
    this.editBranchEvent.emit(this.branch);
  }
}
