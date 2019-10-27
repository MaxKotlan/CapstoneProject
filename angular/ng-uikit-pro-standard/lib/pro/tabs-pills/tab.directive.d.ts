import { EventEmitter, TemplateRef, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export declare class TabDirective implements OnInit, OnDestroy {
    private renderer;
    type: string;
    /** tab header text */
    heading: string;
    /** if true tab can not be activated */
    disabled: boolean;
    private _disabled;
    /** if true tab can be removable, additional button will appear */
    removable: boolean;
    /** if set, will be added to the tab's class atribute */
    customClass: string;
    tabOrder: number;
    /** tab active state toggle */
    active: boolean;
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    select: EventEmitter<TabDirective>;
    /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
    deselect: EventEmitter<TabDirective>;
    /** fired before tab will be removed */
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    test: boolean;
    headingRef: TemplateRef<any>;
    tabset: TabsetComponent;
    el: ElementRef | any;
    thus: this;
    private _active;
    isBrowser: any;
    constructor(platformId: string, tabset: TabsetComponent, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
