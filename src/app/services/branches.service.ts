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
}
// return this.http.get<Branch[]>(`${apiUrl}/branches/all`);
