/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate } from '@angular/animations';
// SideNav
/** @type {?} */
export var slideIn = trigger('slideIn', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
export var fadeIn = trigger('fadeIn', [
    state('inactive', style({ opacity: 0 })),
    state('active', style({ opacity: 1 })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
export var slideOut = trigger('slideOut', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
export var flipState = trigger('flipState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Rotating animation animation
/** @type {?} */
export var turnState = trigger('turnState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Social reveal animation
/** @type {?} */
export var iconsState = trigger('iconsState', [
    state('isactive', style({ visibility: 'visible', transform: 'translate(-6%)' })),
    state('isnotactive', style({ visibility: 'hidden', transform: 'translate(27%)' })),
    transition('isactive => isnotactive', animate('100ms ease-in')),
    transition('isnotactive => isactive', animate('200ms ease-out')),
]);
// Reveal animation animation
/** @type {?} */
export var socialsState = trigger('socialsState', [
    state('active', style({ visibility: 'visible', transform: 'translateY(-100%)' })),
    state('inactive', style({ visibility: 'hidden', transform: 'translateY(0)' })),
    transition('* => void', animate('200ms ease-in')),
    transition('void => *', animate('200ms ease-out')),
]);
// image popup
// export const zoomState: any = trigger('zoomState', [
//   state('active', style({ transform: 'scale(1, 1)', cursor: 'zoom-out' })),
//   state('inactive', style({ transform: 'scale(0.9, 0.9)', cursor: 'zoom-in' })),
//   transition('active => inactive', animate('300ms ease-in')),
//   transition('inactive => active', animate('300ms ease-out')),
// ]);
// export const restartState: any = trigger('restartState', [
//   state('inactive', style({ transform: 'scale(0.9, 0.9)' })),
// ]);
// alerts
/** @type {?} */
export var flyInOut = trigger('flyInOut', [
    state('inactive', style({ display: 'none', opacity: 0.7 })),
    state('active', style({ opacity: 0.7 })),
    state('removed', style({ opacity: 0 })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => removed', animate('300ms ease-in')),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUdqRixNQUFNLEtBQU8sT0FBTyxHQUFRLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDN0MsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDeEUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUN4RCxDQUFDOztBQUVGLE1BQU0sS0FBTyxNQUFNLEdBQVEsT0FBTyxDQUFDLFFBQVEsRUFBRTtJQUMzQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0NB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SUFDMUQsVUFBVSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztDQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLy8gU2lkZU5hdlxuZXhwb3J0IGNvbnN0IHNsaWRlSW46IGFueSA9IHRyaWdnZXIoJ3NsaWRlSW4nLCBbXG4gIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMzAwJSknIH0pKSxcbiAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxuICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBmYWRlSW46IGFueSA9IHRyaWdnZXIoJ2ZhZGVJbicsIFtcbiAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcbiAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG5dKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0OiBhbnkgPSB0cmlnZ2VyKCdzbGlkZU91dCcsIFtcbiAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0zMDAlKScgfSkpLFxuICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG5dKTtcblxuZXhwb3J0IGNvbnN0IGZsaXBTdGF0ZTogYW55ID0gdHJpZ2dlcignZmxpcFN0YXRlJywgW1xuXG4gIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZVkoMTc5LjlkZWcpJyB9KSksXG4gIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlWSgwKScgfSkpLFxuXSk7XG5cbi8vIFJvdGF0aW5nIGFuaW1hdGlvbiBhbmltYXRpb25cbmV4cG9ydCBjb25zdCB0dXJuU3RhdGU6IGFueSA9IHRyaWdnZXIoJ3R1cm5TdGF0ZScsIFtcbiAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlWSgxNzkuOWRlZyknIH0pKSxcbiAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGVZKDApJyB9KSksXG5dKTtcblxuLy8gU29jaWFsIHJldmVhbCBhbmltYXRpb25cbmV4cG9ydCBjb25zdCBpY29uc1N0YXRlOiBhbnkgPSB0cmlnZ2VyKCdpY29uc1N0YXRlJywgW1xuICBzdGF0ZSgnaXNhY3RpdmUnLCBzdHlsZSh7IHZpc2liaWxpdHk6ICd2aXNpYmxlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC02JSknIH0pKSxcbiAgc3RhdGUoJ2lzbm90YWN0aXZlJywgc3R5bGUoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDI3JSknIH0pKSxcbiAgdHJhbnNpdGlvbignaXNhY3RpdmUgPT4gaXNub3RhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxuICB0cmFuc2l0aW9uKCdpc25vdGFjdGl2ZSA9PiBpc2FjdGl2ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuXSk7XG5cbi8vIFJldmVhbCBhbmltYXRpb24gYW5pbWF0aW9uXG5leHBvcnQgY29uc3Qgc29jaWFsc1N0YXRlOiBhbnkgPSB0cmlnZ2VyKCdzb2NpYWxzU3RhdGUnLCBbXG4gIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7IHZpc2liaWxpdHk6ICd2aXNpYmxlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH0pKSxcbiAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKSxcbl0pO1xuXG4vLyBpbWFnZSBwb3B1cFxuLy8gZXhwb3J0IGNvbnN0IHpvb21TdGF0ZTogYW55ID0gdHJpZ2dlcignem9vbVN0YXRlJywgW1xuLy8gICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLCAxKScsIGN1cnNvcjogJ3pvb20tb3V0JyB9KSksXG4vLyAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMC45LCAwLjkpJywgY3Vyc29yOiAnem9vbS1pbicgfSkpLFxuLy8gICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuLy8gICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCczMDBtcyBlYXNlLW91dCcpKSxcbi8vIF0pO1xuXG4vLyBleHBvcnQgY29uc3QgcmVzdGFydFN0YXRlOiBhbnkgPSB0cmlnZ2VyKCdyZXN0YXJ0U3RhdGUnLCBbXG4vLyAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMC45LCAwLjkpJyB9KSksXG4vLyBdKTtcblxuLy8gYWxlcnRzXG5leHBvcnQgY29uc3QgZmx5SW5PdXQ6IGFueSA9IHRyaWdnZXIoJ2ZseUluT3V0JywgW1xuICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7IGRpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMC43IH0pKSxcbiAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMC43IH0pKSxcbiAgc3RhdGUoJ3JlbW92ZWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gcmVtb3ZlZCcsIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nKSksXG5dKTtcbiJdfQ==