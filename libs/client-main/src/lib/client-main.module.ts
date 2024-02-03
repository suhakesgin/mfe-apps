import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchClientComponent } from './search-client/search-client.component';
import { RouterModule } from '@angular/router';
import { SearchClientRoutingModule } from './search-client/search-client-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, SearchClientRoutingModule],
  declarations: [SearchClientComponent],
})
export class ClientMainModule {}
