import { RouterModule, Routes } from '@angular/router';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { ParentBindingComponent } from './components/parent-binding/parent-binding.component';
import { BuiltInDirectivesExampleComponent } from './components/built-in-directives-example/built-in-directives-example.component';
import { ChildBindingComponent } from './components/child-binding/child-binding.component';
import { InteractionCompComponent } from './components/interaction-comp/interaction-comp.component';
import { ViewChildViewChildrenComponent } from './components/view-child-view-children/view-child-view-children.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CurrentPipesComponent } from './components/current-pipes/current-pipes.component';
import { Vd15HttpClientComponentComponent } from './components/vd15-http-client-component/vd15-http-client-component.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DomSanitizerComponent } from './components/dom-sanitizer/dom-sanitizer.component';


export const routes: Routes = [
    {
        path:'string-interpolation',
        component:StringInterpolationComponent
    },
    {
        path:'child-binding',
        component:ChildBindingComponent
    },
    {
        path:'parent-binding',
        component:ParentBindingComponent
    },
    {
        path:'built-in-directives-example',
        component:BuiltInDirectivesExampleComponent
        
    },
    {
        path:'interaction-comp',
        component:InteractionCompComponent
    },
    {
        path:'view-child-view-children',
        component:ViewChildViewChildrenComponent
    },
    {
        path:'content-projection',
        component:ContentProjectionComponent
    }
    ,
    {
        path:'built-in-pipes',
        component:BuiltInPipesComponent
    },
    {
        path:'current-pipes',
        component:CurrentPipesComponent
    },
    {
        path:'vd15-http-client-component',
        component:Vd15HttpClientComponentComponent
    },
    {
        path:'reactive-forms',
        component:ReactiveFormsComponent
    },
    {
        path:'dom-sanitizer',
        component:DomSanitizerComponent
    }
];

