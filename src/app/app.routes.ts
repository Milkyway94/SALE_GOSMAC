import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SellComponent } from './sell/sell.component';
import { CustomerComponent } from './customer/customer.component';
import { ProviderComponent } from './provider/provider.component';
import { ReportComponent } from './report/report.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductAddComponent } from './product/product-add.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductOverviewComponent } from './product/product-overview.component';
import { ProductProjectsComponent } from './product/product-projects.component';
import { SettingsComponent } from './settings/settings.component';

const routing: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/product-detail/:id', component: ProductDetailComponent },
    { path: 'product/product-add', component: ProductAddComponent },
    {
        path: 'product/product-edit/:id',
        component: ProductEditComponent,
        // children: [
        //      { path: '', redirectTo:'overview',pathMatch:'full' },
        //     { path: 'overview', component: ProductOverviewComponent },
        //     { path: 'projects', component: ProductProjectsComponent },
        // ]
    },
    { path: 'ban-hang', component: SellComponent },
    { path: 'khach-hang', component: CustomerComponent },
    { path: 'ncc', component: ProviderComponent },
    { path: 'bao-cao', component: ReportComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', component: NotfoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing); 