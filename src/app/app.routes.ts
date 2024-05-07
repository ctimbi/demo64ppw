import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
    {path: 'suma', title: 'Operación suma', component: SumaComponent},
    {path: 'resta', title: 'Operación resta', component: RestaComponent},
    {path: 'acercade', title: 'Acerca de...', component: AcercadeComponent},
    {path: 'posts', title: 'Posts', component: PostsComponent},
];
