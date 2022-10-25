import { Component, Input, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Branch } from 'src/app/models/branch';
import { PingService } from 'src/app/services/ping.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {
  @Input() branch!: Branch;

  testIp: string = '192.168.1.16';
  orangeConnected!: boolean;
  ttConnected!: boolean;
  constructor(private ping: PingService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.ping.pingBranch(this.branch.orangeIpAddress).subscribe((res) => {
        this.orangeConnected = res;
      });
      this.ping.pingBranch(this.branch.ttIpAddress).subscribe((res) => {
        this.ttConnected = res;
      });
    }, 1000);
  }
}
