import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
  },
  {
    path: 'sub1',
    loadComponent: () => import('./sub1/sub1.component').then(m => m.Sub1Component)
  },
  {
    path: 'sub2',
    loadComponent: () => import('./sub2/sub2.component').then(m => m.Sub2Component)
  },
  {
    path: 'sub3',
    loadComponent: () => import('./sub3/sub3.component').then(m => m.Sub3Component)
  },
  {
    path: 'sub4',
    loadComponent: () => import('./sub4/sub4.component').then(m => m.Sub4Component)
  },
  {
    path: 'sub5',
    loadComponent: () => import('./sub5/sub5.component').then(m => m.Sub5Component)
  },
  {
    path: 'sub6',
    loadComponent: () => import('./sub6/sub6.component').then(m => m.Sub6Component)
  },
  {
    path: 'sub7',
    loadComponent: () => import('./sub7/sub7.component').then(m => m.Sub7Component)
  },
  {
    path: 'sub8',
    loadComponent: () => import('./sub8/sub8.component').then(m => m.Sub8Component)
  },
  {
    path: 'sub9',
    loadComponent: () => import('./sub9/sub9.component').then(m => m.Sub9Component)
  },
  {
    path: 'sub10',
    loadComponent: () => import('./sub10/sub10.component').then(m => m.Sub10Component)
  },
  {
    path: 'sub11',
    loadComponent: () => import('./sub11/sub11.component').then(m => m.Sub11Component)
  },
  {
    path: 'sub12',
    loadComponent: () => import('./sub12/sub12.component').then(m => m.Sub12Component)
  },
  {
    path: 'sub0',
    loadComponent: () => import('./sub0/sub0.component').then(m => m.Sub0Component)
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' }  // 預設路由指向 main
];
