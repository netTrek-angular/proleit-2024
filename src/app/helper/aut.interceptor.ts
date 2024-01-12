import { HttpInterceptorFn } from '@angular/common/http';

export const autInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone(
    {
      headers: req.headers.set( 'Authorization', 'Basic ' + btoa('Saban'))
    }
  )
  return next(clone);
};
