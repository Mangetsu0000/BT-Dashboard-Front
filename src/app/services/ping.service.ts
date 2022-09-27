import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PingService {
  constructor(private http: HttpClient) {}
  pingBranch(ipAddress: string) {
    return this.http.get<boolean>(`${apiUrl}/ping/${ipAddress}`);
  }
}
