import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const flowbite: any;

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  
  loadFlowbite(callback?: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize all Flowbite components
      flowbite.initDrawers();
      flowbite.initDropdowns();
      flowbite.initModals();
      flowbite.initTooltips();
      
      if (callback) {
        callback(flowbite);
      }
    }
  }
}