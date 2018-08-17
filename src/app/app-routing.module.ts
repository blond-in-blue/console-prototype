import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridsterExampleComponent } from './examples/gridster-example/gridster-example.component';
import { BootstrapExampleComponent } from './examples/bootstrap-example/bootstrap-example.component';
import { MasonryExampleComponent } from './examples/masonry-example/masonry-example.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/gridster-example',
        pathMatch: 'full'
    },
    {
        path: 'gridster-example',
        component: GridsterExampleComponent,
    },
    {
        path: 'bootstrap-example',
        component: BootstrapExampleComponent,
    },
    {
        path: 'masonry-example',
        component: MasonryExampleComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
