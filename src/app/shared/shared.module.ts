import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatBadgeModule, 
  MatDialogModule, 
  MatTableModule
} from '@angular/material';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    ProductItemComponent,
    ShowcaseComponent
  ],
  declarations: [
    HeaderComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    ShowcaseComponent
  ],
  entryComponents: [
    ShoppingCartComponent
  ],
})
export class SharedModule { }
