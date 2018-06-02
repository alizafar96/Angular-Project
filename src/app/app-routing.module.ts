import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BookTicketComponent } from "./book-ticket/book-ticket.component";
import { WellcomeComponent } from "./wellcome/wellcome.component";
import { PrintTicketComponent } from "./print-ticket/print-ticket.component";
import { CancelTicketComponent } from "./cancel-ticket/cancel-ticket.component";

const routes: Routes = [
  { path: 'booking', component: BookTicketComponent },
  { path: 'wellcome', component: WellcomeComponent },
  { path: '', component: WellcomeComponent },
  { path: 'print-ticket', component: PrintTicketComponent},
  { path: 'cancel-ticket', component: CancelTicketComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
/**import these in app & add in decleration
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}