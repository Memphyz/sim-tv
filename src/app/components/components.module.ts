import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { ComponentsComponent } from './components.component';
import { ContractConditionsComponent } from './contract-conditions/navigation.component';
import { FindUsComponent } from './find-us/find-us.component';
import { IconComponent } from './icon/icon.component';
import { InfoEmpresaComponent } from './info-empresa/info-empresa.component';
import { NgbdModalComponent, NgbdModalContent } from './modal/modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        InfoEmpresaComponent,
        ContractConditionsComponent,
        FindUsComponent,
        NgbdModalComponent,
        NgbdModalContent,
        IconComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
