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
    console.log('get branches works');
    return this.http.get<Branch[]>(`${apiUrl}/branches/all`);
  }
  createBranch(branch: any) {
    console.log(branch);
    return this.http.post<any>(`${apiUrl}/branches/create`, branch);
  }
  deleteBranch(id: number) {
    console.log('id of branch to delete : ' + id);
    return this.http.delete(`${apiUrl}/branches/delete/${id}`);
  }
  editBranch(branchId: number, branch: any) {
    console.log(branchId, branch);
    return this.http.patch(`${apiUrl}/branches/update/${branchId}`, branch);
  }
}
