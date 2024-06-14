import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIconComponent, TuiLoaderComponent} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTagComponent} from './tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiIconComponent,
        TuiLoaderComponent,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
    declarations: [TuiTagComponent],
    exports: [TuiTagComponent],
})
export class TuiTagModule {}