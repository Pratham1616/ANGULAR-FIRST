import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // {
  //   path: "",
  //   data: { type: 'admin' },
  //   loadChildren: () =>
  //     import("./admin/admin.module").then((m) => m.AdminModule),
  // },
  {
    path: "",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
