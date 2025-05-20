import { Injectable } from '@angular/core';

declare const flowbite: any;

@Injectable({
  providedIn: 'root'
})
export class FlowbiteInit {
  init() {
    // Initialize Flowbite
    if (typeof window !== 'undefined') {
      flowbite.initDrawers();
      flowbite.initDropdowns();
      flowbite.initModals();
      flowbite.initTooltips();
    }
  }
} 