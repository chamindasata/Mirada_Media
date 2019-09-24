import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('Access_token');
       

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
        }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          
        // }

        // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        // request = request.clone({ headers: request.headers.set('Access-Contorl-Allow-Origin', 'https://publisher.miradamedia-qa.io/') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
               
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.toastr.error(error.message, 'Error');
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }
}