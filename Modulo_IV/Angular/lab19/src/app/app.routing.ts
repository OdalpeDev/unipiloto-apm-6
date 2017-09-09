import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {ProductComponent} from "./pages/product/product.component";
import {DetailProductComponent} from "./pages/details/detail-product/detail-product.component";
import {StudentComponent} from "./pages/student/student.component";
import {DetailStudentComponent} from "./pages/details/detail-student/detail-student.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent },
  { path: 'product/detail/:id', component: DetailProductComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/detail/:id', component: DetailStudentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
