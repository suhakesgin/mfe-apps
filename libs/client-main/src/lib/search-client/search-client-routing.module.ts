import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchClientComponent } from './search-client.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: SearchClientComponent }]),
  ],
  exports: [RouterModule],
})
export class SearchClientRoutingModule {}
