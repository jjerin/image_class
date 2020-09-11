import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageClassFlowersComponent } from './image-class-flowers/image-class-flowers.component';
import { ImageClassAnimalsComponent } from './image-class-animals/image-class-animals.component';
import { ImageClassCatsDogsComponent } from './image-class-cats-dogs/image-class-cats-dogs.component';

const routes: Routes = [
  { path: 'image-class-flowers', component: ImageClassFlowersComponent },
  { path: 'image-class-animals', component: ImageClassAnimalsComponent },
  { path: 'image-class-cats-dogs', component: ImageClassCatsDogsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
