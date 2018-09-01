import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponseLibrary} from './service/response-library.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ResponseLibrary
  ],
  declarations: []
})
export class CoreModule {
  // we should not use CoreModule as dependency on other modules because we want it to be singleton in the app
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
