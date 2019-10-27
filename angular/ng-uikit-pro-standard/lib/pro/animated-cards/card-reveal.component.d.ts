import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
export declare class CardRevealComponent {
    private _r;
    private _cdRef;
    cardReveal: ElementRef;
    cardFront: ElementRef;
    cardOverflow: ElementRef;
    socials: any;
    show: boolean;
    onWindowResize(): void;
    constructor(_r: Renderer2, _cdRef: ChangeDetectorRef);
    toggle(): void;
}
