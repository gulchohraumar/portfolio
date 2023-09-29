import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { WorksComponent } from './works/works.component';
import { TablesComponent } from './works/tables/tables.component';
import { IlldyComponent } from './works/illdy/illdy.component';
import { CreativeBoutigueComponent } from './works/layouts/creative-boutigue/creative-boutigue.component';
import { LayoutsComponent } from './works/layouts/layouts.component';
import { ElegantCareComponent } from './works/layouts/elegant-care/elegant-care.component';
import { GoldenOfferComponent } from './works/layouts/golden-offer/golden-offer.component';
import { GreenComfortComponent } from './works/layouts/green-comfort/green-comfort.component';
import { DraggableComponent } from './works/draggable/draggable.component';
import { CardsComponent } from './works/cards/cards.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { HomeComponent } from './home/home.component';
import { MatSortHeader, MatSortModule } from '@angular/material/sort';
import { NgxCaptchaModule } from '@binssoft/ngx-captcha';
import { NgxSlickJsModule } from 'ngx-slickjs';
import {CdkMenuModule} from '@angular/cdk/menu';


@NgModule({
    declarations: [
        PublicComponent,
        WorksComponent,
        TablesComponent,
        IlldyComponent,
        CreativeBoutigueComponent,
        LayoutsComponent,
        ElegantCareComponent,
        GoldenOfferComponent,
        GreenComfortComponent,
        DraggableComponent,
        CardsComponent,
        SkillsComponent,
        AboutComponent,
        ContractComponent,
        HomeComponent,

    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        MatAutocompleteModule,
        AppRoutingModule,
        MatRippleModule,
        MatTooltipModule,
        MatChipsModule,
        DragDropModule,
        MatRadioModule,
        RouterModule,
        HttpClientModule,
        MatSortModule,
        NgxCaptchaModule,
        CdkMenuModule,
        NgxSlickJsModule.forRoot({
            links: {
              jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
              slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
              slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
              slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
            }
        })

    ]
})
export class PublicModule { }
