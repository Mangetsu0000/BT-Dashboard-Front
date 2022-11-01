import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { Branch } from '../models/branch';

@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  constructor(private http: HttpClient) {}
  getBranches() {
    return this.http.get<Branch[]>(`${apiUrl}/branches/all`);
  }
  createBranch(userId: number, branch: any) {
    console.log(branch, userId);
    this.http.post<any>(`${apiUrl}/branches/create`, userId, branch);
  }
}
