import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _pLATFORM_ID = inject(PLATFORM_ID);
  const _authService = inject(AuthService); // Inject AuthService هنا

  if (isPlatformBrowser(_pLATFORM_ID)) {
    const currentPath = state.url;

    const token = localStorage.getItem('userToken');
    if (token !== null) {
      _authService.saveUserData(); 
      return true;
    } else {
      if (currentPath === '/home' || currentPath === '') {
        return true;
      } else {
        _router.navigate(['/login']);
        return false;
      }
    }
  } else {
    return true;
  }
};
