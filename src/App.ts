/********************************************************************
 *
 * DigitalSignage.com Inc (c), FREE Digital Signage
 * StudioDashboard for Enterprise userrs
 * See GitHub for License
 *
 * for Development install and run:
 1. npm install chokidar-socket-emitter --save-dev ;
 2. npm install http-server --save-dev ;
 3. jspm i --dev systemjs-hot-reloader
 4. npm run devserver
 *
 ****************************************************************/

import "zone.js/dist/zone";
import "reflect-metadata";
import {Router} from "@angular/router";
import {routing} from "./App.routes";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Component, enableProdMode, ViewEncapsulation, NgModule, NgModuleRef} from "@angular/core";
import * as platform from "platform";
import "jspm_packages/github/twbs/bootstrap@3.3.6";
import "twbs/bootstrap/dist/css/bootstrap.css!";
import "./styles/style.css!";
import {StyleService} from "./styles/StyleService";
import {appInjService} from "./services/AppInjService";
import {LocalStorage} from "./services/LocalStorage";
import {StoreService} from "./services/StoreService";
import {BusinessAction} from "./business/BusinessAction";
import {ResellerAction} from "./reseller/ResellerAction";
import {OrdersAction} from "./comps/app1/orders/OrdersAction";
import {orders} from "./comps/app1/orders/OrdersReducer";
import {StationsAction} from "./stations/StationsAction";
import {CharCount} from "./pipes/CharCount";
import {HttpModule, JsonpModule} from "@angular/http";
import {CommBroker} from "../src/services/CommBroker";
import {Filemenu} from "../src/comps/filemenu/Filemenu";
import {FilemenuItem} from "../src/comps/filemenu/FilemenuItem";
import {Logo} from "./comps/logo/Logo";
import {Footer} from "./comps/footer/Footer";
import {Consts} from "../src/Conts";
import {AppStore} from "angular2-redux-util";
import {Lib} from "./Lib";
import {CreditService} from "./services/CreditService";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/finally";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/do";
import notify from "./appdb/NotifyReducer";
import appdb from "./appdb/AppdbReducer";
import {business} from "./business/BusinessReducer";
import {reseller} from "./reseller/ResellerReducer";
import {adnet} from "./adnet/AdnetReducer";
import {stations} from "./stations/StationsReducer";
import {AppdbAction} from "./appdb/AppdbAction";
import {LogoCompany} from "./comps/logo/LogoCompany";
import {Observable} from "rxjs/Rx";
import {
    LazyMapsAPILoaderConfig, AgmCoreModule
} from "angular2-google-maps/core/core.umd.js";
import {AdnetActions} from "./adnet/AdnetActions";
import {AUTH_PROVIDERS} from "./services/AuthService";
import {BrowserModule} from "@angular/platform-browser";
import {SimpleList} from "./comps/simplelist/Simplelist";
import {Orders} from "./comps/app1/orders/Orders";
import {UsersDetails} from "./comps/app1/users/UsersDetails";
import {LoginPanel} from "./comps/entry/LoginPanel";
import {Menu} from "./comps/sidemenu/Menu";
import {MenuItem} from "./comps/sidemenu/MenuItem";
import {Whitelabel} from "./comps/app1/whitelabel/Whitelabel";
import {Apps} from "./comps/app1/apps/Apps";
import {Privileges} from "./comps/app1/privileges/Privileges";
import {Dashboard} from "./comps/app1/dashboard/Dashboard";
import {Logout} from "./comps/logout/Logout";
import {Tabs} from "./comps/tabs/tabs";
import {Tab} from "./comps/tabs/tab";
import {Account} from "./comps/app1/account/Account";
import {BlurForwarder} from "./comps/blurforwarder/BlurForwarder";
import {Loading} from "./comps/loading/Loading";
import {InputEdit} from "./comps/inputedit/InputEdit";
import {Users} from "./comps/app1/users/Users";
import {Adnet} from "./comps/app1/adnet/Adnet";
import {App1} from "./comps/app1/App1";
import {RatesTable} from "./comps/app1/adnet/rates/RatesTable/RatesTable";
import {SIMPLEGRID_DIRECTIVES} from "./comps/simplegrid/SimpleGrid";
import {AdnetConfigCustomer} from "./comps/app1/adnet/config/AdnetConfigCustomer";
import {AdnetConfig} from "./comps/app1/adnet/config/AdnetConfig";
import {AdnetConfigTargets} from "./comps/app1/adnet/targets/AdnetConfigTargets";
import {AdnetConfigRates} from "./comps/app1/adnet/rates/AdnetConfigRates";
import {MODAL_DIRECTIVES} from "./comps/ng2-bs3-modal/ng2-bs3-modal";
import {Infobox} from "./comps/infobox/Infobox";
import {StationsGrid} from "./comps/app1/dashboard/StationsGrid";
import {StationsMap} from "./comps/app1/dashboard/StationsMap";
import {ServerAvg} from "./comps/app1/dashboard/ServerAvg";
import {ServerStats} from "./comps/app1/dashboard/ServerStats";
import {StationDetails} from "./comps/app1/dashboard/StationDetails";
import {Ng2Highcharts} from "./comps/ng2-highcharts/src/directives/ng2-highcharts";
import {StationSnapshot} from "./comps/app1/dashboard/StationSnapshot";
import {OrderDetails} from "./comps/app1/orders/OrderDetails";
import {PrivilegesDetails} from "./comps/app1/privileges/PrivilegesDetails";
import {UserStorage} from "./comps/app1/users/UserStorage";
import {ChangePass} from "./comps/app1/users/ChangePass";
import {ModalDialog} from "./comps/modaldialog/ModalDialog";
import {UserInfo} from "./comps/app1/users/UserInfo";
import {AddUser} from "./comps/app1/users/AddUser";
import {Samplelist} from "./comps/app1/users/SampleList";
import {ImgLoader} from "./comps/imgloader/ImgLoader";
import {Ng2Highmaps} from "./comps/ng2-highcharts/src/directives/ng2-highmaps";
import {Ng2Highstocks} from "./comps/ng2-highcharts/src/directives/ng2-highstocks";
import {SimpleGridSortableHeader} from "./comps/simplegrid/SimpleGridSortableHeader";
import {SimpleGridRecord} from "./comps/simplegrid/SimpleGridRecord";
import {SimpleGridData} from "./comps/simplegrid/SimpleGridData";
import {SimplelistEditable} from "./comps/simplelist/SimplelistEditable";
import {OrderBy} from "./pipes/OrderBy";
import {SortBy} from "./pipes/SortBy";
import {FilterPipe} from "./pipes/FilterPipe";
import {AdnetConfigTargetStations} from "./comps/app1/adnet/targets/AdnetConfigTargetStations";
import {AdnetConfigTargetProps} from "./comps/app1/adnet/targets/AdnetConfigTargetProps";
import {AdnetLocation} from "./comps/app1/adnet/targets/AdnetLocation";
import {MapAddress} from "./comps/mapaddress/MapAddress";
import {AdnetNetwork} from "./comps/app1/adnet/network/AdnetNetwork";
import {AdnetNetworkPackageEditor} from "./comps/app1/adnet/network/AdnetNetworkPackageEditor";
import {AdnetNetworkCustomerSelector} from "./comps/app1/adnet/network/AdnetNetworkCustomerSelector";
import {AdnetNetworkPackageViewer} from "./comps/app1/adnet/network/AdnetNetworkPackageViewer";
import {AdnetNetworkPackageTarget} from "./comps/app1/adnet/network/AdnetNetworkPackageTarget";
import {AdnetNetworkPackageProps} from "./comps/app1/adnet/network/AdnetNetworkPackageProps";
import {AdnetNetworkPackageContent} from "./comps/app1/adnet/network/AdnetNetworkPackageContent";
import {AdnetNetworkPackageContentProps} from "./comps/app1/adnet/network/AdnetNetworkPackageContentProps";
import {AdnetNetworkTarget} from "./comps/app1/adnet/network/AdnetNetworkTarget";
import {AdnetNetworkTargetProps} from "./comps/app1/adnet/network/AdnetNetworkTargetProps";
import {DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import {AccordionModule} from 'ng2-bootstrap/ng2-bootstrap';
//import "zone.js/dist/long-stack-trace-zone"; // removed 9-7-2016

export enum ServerMode {
    CLOUD,
    PRIVATE,
    HYBRID
}

/**
 Main application bootstrap
 @class App
 **/
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StyleService, AppdbAction],
    templateUrl: '/src/App.html'
})

export class Main {
    constructor(private localStorage: LocalStorage,
                private router: Router,
                private appStore: AppStore,
                private commBroker: CommBroker,
                styleService: StyleService,
                private appdbAction: AppdbAction) {

        // force logout
        // this.localStorage.removeItem('remember_me')
        // todo: add logic to as when on each env
        // 0 = cloud, 1 = private 2 = hybrid
        this.checkPlatform();

        this.commBroker.setValue(Consts.Values().SERVER_MODE, ServerMode.CLOUD);
        this.m_styleService = styleService;
        this.commBroker.setService(Consts.Services().App, this);
        Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(() => {
            this.appResized();
        });
        if (!Lib.DevMode()) {
            setTimeout(() => {
                router.navigate(['/App1/Dashboard']);
            }, 1000);
        }
    }

    private m_styleService: StyleService;
    private version = '1.605.rc6';

    private checkPlatform() {
        switch (platform.name.toLowerCase()) {
            case 'microsoft edge': {
                alert(`${platform.name} browser not supported at this time, please use Google Chrome`);
                break;
            }
            case 'chrome': {
                break;
            }
            default: {
                alert('for best performance please use Google Chrome');
                break;
            }
        }
    }

    public appResized(): void {
        var appHeight = document.body.clientHeight;
        var appWidth = document.body.clientWidth;
        this.commBroker.setValue(Consts.Values().APP_SIZE, {height: appHeight, width: appWidth});
        this.commBroker.fire({
            fromInstance: self,
            event: Consts.Events().WIN_SIZED,
            context: '',
            message: {height: appHeight, width: appWidth}
        })
    }
}

if (!Lib.DevMode())
    enableProdMode();

var googleKey = function () {
    var config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyAGD7EQugVG8Gq8X3vpyvkZCnW4E4HONLI';
    config.libraries = ['places'];
    return config;
}

var providing = [CommBroker, AUTH_PROVIDERS,
    {provide: LazyMapsAPILoaderConfig, useFactory: () => googleKey()},
    {provide: AppStore, useFactory: Lib.StoreFactory({notify, appdb, business, stations, reseller, adnet, orders})},
    {provide: StoreService, useClass: StoreService},
    {provide: BusinessAction, useClass: BusinessAction},
    {provide: ResellerAction, useClass: ResellerAction},
    {provide: AdnetActions, useClass: AdnetActions},
    {provide: OrdersAction, useClass: OrdersAction},
    {provide: StationsAction, useClass: StationsAction},
    {provide: AppdbAction, useClass: AppdbAction},
    {provide: CreditService, useClass: CreditService},
    {provide: LocalStorage, useClass: LocalStorage},
    {provide: CommBroker, useClass: CommBroker},
    {provide: Consts, useClass: Consts},
    {provide: "DEV_ENV", useValue: Lib.DevMode()},
    {provide: "OFFLINE_ENV", useValue: false},
    {provide: CharCount}];

var decelerations = [Main, RatesTable, UsersDetails, LoginPanel, Menu, MenuItem, Account, Whitelabel, Apps, App1, Users, Adnet, Privileges, Dashboard, Logout, Orders, Filemenu, FilemenuItem, Logo, LogoCompany, Footer, BlurForwarder, InputEdit, OrderBy, SortBy, FilterPipe, AdnetConfigTargets, AdnetConfigRates, Tabs, Tab, ServerStats, ServerAvg, StationsMap, StationsGrid, StationDetails, ImgLoader, Ng2Highcharts, AdnetConfigCustomer, AdnetConfig, StationSnapshot, OrderDetails, SimpleList, PrivilegesDetails, ModalDialog, Infobox, UserStorage, Loading, Samplelist, SIMPLEGRID_DIRECTIVES, UserInfo, AddUser, ChangePass, MODAL_DIRECTIVES, Ng2Highstocks, Ng2Highmaps, SimpleGridSortableHeader, SimpleGridRecord, SimpleGridData, SimplelistEditable, AdnetConfigTargetStations, AdnetConfigTargetProps, AdnetLocation, MapAddress, AdnetNetwork, AdnetNetworkCustomerSelector, AdnetNetworkPackageEditor, AdnetNetworkPackageViewer, AdnetNetworkPackageTarget, AdnetNetworkPackageProps, AdnetNetworkPackageContent, AdnetNetworkPackageContentProps, AdnetNetworkTarget, AdnetNetworkTargetProps];

@NgModule({
    imports: [BrowserModule, AgmCoreModule.forRoot(), JsonpModule, HttpModule, ReactiveFormsModule, FormsModule, DropdownModule, AccordionModule, routing],
    providers: [providing],
    declarations: decelerations,
    bootstrap: [Main],
})
export class App {
}
platformBrowserDynamic().bootstrapModule(App, providing).then((appRef: NgModuleRef<any>) => {
    appInjService(appRef.injector);
});

window['hr'] && window['hr'].on('change', (fileName) => {
    if (fileName.indexOf('html') !== -1) {
        var newBody = document.createElement('body')
        newBody.appendChild(document.createElement('app'))
        document.body = newBody;
        platformBrowserDynamic().bootstrapModule(App, providing).then((appRef: NgModuleRef<any>) => {
            appInjService(appRef.injector);
        });
    }
})