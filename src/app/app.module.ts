import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchComponent } from './components/branch/branch.component';
import { BranchesComponent } from './components/branches/branches.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BranchComponent, BranchesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
