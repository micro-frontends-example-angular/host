import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'simple-mfe',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'simple-mfe',
        exposedModule: './SimpleModuleModule',
      }).then((m) => m.SimpleModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
