import {Component, forwardRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {TuiActiveZoneDirective, TuiObscuredDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiLinkDirective,
    TuiNotificationModule,
} from '@taiga-ui/core';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    standalone: true,
    imports: [
        TuiDemoModule,
        TuiDropdownModule,
        TuiNotificationModule,
        TuiActiveZoneDirective,
        TuiButtonDirective,
        TuiObscuredDirective,
        DropdownDocumentationModule,
        TuiLinkDirective,
        RouterLink,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected readonly examples = [
        'Basic',
        'Interesting',
        'Change detection',
        'Appearance',
        'Manual',
        'Mobile',
    ];

    protected open = false;

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    protected onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}