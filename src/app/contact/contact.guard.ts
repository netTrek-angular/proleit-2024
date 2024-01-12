import { CanActivateFn } from '@angular/router';

// export const contactGuard: CanActivateFn = (route, state) => {
export const contactGuard: CanActivateFn = () => {
  return true;
};
