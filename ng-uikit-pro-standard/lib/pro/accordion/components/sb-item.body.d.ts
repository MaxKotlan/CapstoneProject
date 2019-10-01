import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef, AfterContentInit, OnDestroy } from '@angular/core';
import { RouterLinkWithHref, Router } from '@angular/router';
export interface IAccordionAnimationState {
    state: string;
    accordionEl: ElementRef;
}
export declare class SBItemBodyComponent implements AfterContentInit, OnDestroy {
    el: ElementRef;
    private _cdRef;
    private router;
    customClass: string;
    animationStateChange: EventEmitter<IAccordionAnimationState>;
    routerLinks: QueryList<RouterLinkWithHref>;
    autoExpand: boolean;
    collapsed: boolean;
    height: string;
    expandAnimationState: string;
    private _destroy$;
    id: string;
    ariaLabelledBy: string;
    bodyEl: ElementRef;
    constructor(el: ElementRef, _cdRef: ChangeDetectorRef, router: Router);
    toggle(collapsed: boolean): void;
    animationCallback(): void;
    openSidenavOnActiveLink(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
