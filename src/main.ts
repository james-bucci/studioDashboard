import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from "./app/app.module";
import {Observable} from "rxjs";
// import { AppModule } from './app/';

import {hmrBootstrap} from './hmr';

const debuggerOn = true;

Observable.prototype.debug = function(message:string) {
    return this.do(
        nextValue => {
            if (debuggerOn) {
                console.log(message, nextValue)
            }
        },
        error => {
            if (debuggerOn) {
                console.error(message, error)
            }
        },
        () => {
            if (debuggerOn) {
                console.error("Observable completed - ", message)
            }
        }
    );
};

declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>
    }
}

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => {
    return platformBrowserDynamic().bootstrapModule(AppModule);
};


if (environment.hmr) {
    if (module['hot']) {
        hmrBootstrap(module, bootstrap);
    } else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
} else {
    bootstrap();
}


