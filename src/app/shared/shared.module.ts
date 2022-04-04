import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [DemoComponent, Demo2Component],
  imports: [CommonModule],
  exports: [DemoComponent, Demo2Component],
})
export class SharedModule {}
