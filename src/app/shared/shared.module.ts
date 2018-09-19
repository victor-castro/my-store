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
  MatDialogModule 
} from '@angular/material';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

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
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    ShoppingCartComponent
  ],
  entryComponents: [
    ShoppingCartComponent
  ],
})
export class SharedModule { }
