(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('cubo-ui', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['cubo-ui'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var CbAvatarComponent = /** @class */ (function () {
    function CbAvatarComponent() {
        this.size = 'large';
        this.type = 'circle';
    }
    CbAvatarComponent.prototype.getInitials = function () {
        this.nameSplit = this.name.split(' ');
    };
    CbAvatarComponent.prototype.ngOnInit = function () {
        if (this.name) {
            this.nameSplit = this.name.split(' ');
            this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase();
        }
    };
    return CbAvatarComponent;
}());
CbAvatarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-avatar',
                template: "\n  <img class=\"avatar\" src=\"{{imageUrl}}\" alt=\"{{imageAlt}}\" *ngIf=\"imageUrl\">\n  <span class=\"initials\" *ngIf=\"!imageUrl\">{{letters}}</span>\n  <ng-content></ng-content>\n  ",
                styles: [":host{background-color:#eee;background-repeat:no-repeat;background-size:cover;border-radius:50%;display:inline-block;overflow:hidden;vertical-align:middle}:host(.-extra-small){font-size:2.4rem;height:3.2rem;width:3.2rem}:host(.-small){height:4.8rem;width:4.8rem}:host(.-medium){font-size:3.2rem;height:6.4rem;width:6.4rem}:host(.-large){font-size:6.4rem;height:12.8rem;width:12.8rem}:host(.-extra-large){display:block;font-size:9.6rem;overflow:hidden;padding-bottom:calc((2/2) * 100%);position:relative;width:100%}:host(.-extra-large)>*{bottom:0;height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;right:0;top:0;width:100%}:host(.-square){border-radius:0}:host(.-square)>*{-o-object-fit:contain;object-fit:contain}.avatar{background-color:#fff;display:block;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.initials{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#666;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:600;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.Default,
                host: {
                    '[class.-extra-small]': 'size ===  "xsmall"',
                    '[class.-small]': 'size ===  "small"',
                    '[class.-medium]': 'size ===  "medium"',
                    '[class.-large]': 'size ===  "large"',
                    '[class.-extra-large]': 'size ===  "xlarge"',
                    '[class.-square]': 'type ===  "square"'
                }
            },] },
];
CbAvatarComponent.propDecorators = {
    "imageUrl": [{ type: core.Input },],
    "imageAlt": [{ type: core.Input },],
    "name": [{ type: core.Input },],
    "size": [{ type: core.Input },],
    "type": [{ type: core.Input },],
};
var CbAvatarModule = /** @class */ (function () {
    function CbAvatarModule() {
    }
    return CbAvatarModule;
}());
CbAvatarModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [
                    CbAvatarComponent
                ],
                declarations: [
                    CbAvatarComponent
                ],
                imports: [
                    common.CommonModule
                ]
            },] },
];
var CbCardComponent = /** @class */ (function () {
    function CbCardComponent() {
    }
    return CbCardComponent;
}());
CbCardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-card',
                template: "\n    <ng-content></ng-content>\n  ",
                styles: [":host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #eee;color:#282828;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;fill:#666;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden;padding:1.6rem;position:relative;width:100%}a>:host{-webkit-transition:-webkit-box-shadow .15s;transition:-webkit-box-shadow .15s;transition:box-shadow .15s;transition:box-shadow .15s,-webkit-box-shadow .15s}a>:host:hover a>:host:focus{-webkit-box-shadow:0 0 4px rgba(40,40,40,.5);box-shadow:0 0 4px rgba(40,40,40,.5)}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
var CbCardFooterComponent = /** @class */ (function () {
    function CbCardFooterComponent() {
    }
    return CbCardFooterComponent;
}());
CbCardFooterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-card-footer',
                template: "\n    <ng-content></ng-content>\n\t",
                styles: [":host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:2.4rem;padding-top:1.6rem;width:100%}@media only screen and (min-width:600px){:host{margin-top:auto}}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
var CbCardTitleComponent = /** @class */ (function () {
    function CbCardTitleComponent() {
    }
    return CbCardTitleComponent;
}());
CbCardTitleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-card-title, [cbCardTitle]',
                template: "\n    <ng-content></ng-content>\n\t",
                styles: [":host{font:600 2rem/3.2rem Roboto,sans-serif;display:block}:host:not(:first-child){margin-top:.8rem}:host:not(:last-child){margin-bottom:.2rem}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'title' }
            },] },
];
var CbCardSubtitleComponent = /** @class */ (function () {
    function CbCardSubtitleComponent() {
    }
    return CbCardSubtitleComponent;
}());
CbCardSubtitleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-card-subtitle, [cbCardSubtitle]',
                template: "\n    <ng-content></ng-content>\n\t",
                styles: [":host{font:400 1.8rem/2.4rem Roboto,sans-serif;display:block}:host:not(:last-child):not(:empty){margin-bottom:2.4rem}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'subtitle' }
            },] },
];
var CbCardBadgesComponent = /** @class */ (function () {
    function CbCardBadgesComponent() {
    }
    return CbCardBadgesComponent;
}());
CbCardBadgesComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-card-badges',
                template: "\n    <ng-content></ng-content>\n\t",
                styles: [":host{left:1.6rem;position:absolute;top:1.6rem}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
var CbCardModule = /** @class */ (function () {
    function CbCardModule() {
    }
    return CbCardModule;
}());
CbCardModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [
                    CbCardComponent,
                    CbCardBadgesComponent,
                    CbCardFooterComponent,
                    CbCardTitleComponent,
                    CbCardSubtitleComponent,
                ],
                declarations: [
                    CbCardComponent,
                    CbCardBadgesComponent,
                    CbCardFooterComponent,
                    CbCardTitleComponent,
                    CbCardSubtitleComponent,
                ],
                imports: [
                    common.CommonModule
                ]
            },] },
];
var CbSocialComponent = /** @class */ (function () {
    function CbSocialComponent() {
    }
    return CbSocialComponent;
}());
CbSocialComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'cb-social',
                template: "\n    <ng-content></ng-content>\n  ",
                styles: [":host{display:inline-block;-webkit-filter:grayscale(100);filter:grayscale(100);margin-right:.8rem;opacity:.75;text-align:center;-webkit-transition:opacity .3s,-webkit-filter .3s;transition:opacity .3s,-webkit-filter .3s;transition:filter .3s,opacity .3s;transition:filter .3s,opacity .3s,-webkit-filter .3s;will-change:filter}:host:focus,:host:hover{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}"],
                encapsulation: core.ViewEncapsulation.Emulated,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'button'
                }
            },] },
];
var CbSocialModule = /** @class */ (function () {
    function CbSocialModule() {
    }
    return CbSocialModule;
}());
CbSocialModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [
                    CbSocialComponent
                ],
                declarations: [
                    CbSocialComponent
                ],
                imports: [
                    common.CommonModule
                ],
            },] },
];

exports.CbAvatarComponent = CbAvatarComponent;
exports.CbAvatarModule = CbAvatarModule;
exports.CbCardComponent = CbCardComponent;
exports.CbCardFooterComponent = CbCardFooterComponent;
exports.CbCardTitleComponent = CbCardTitleComponent;
exports.CbCardSubtitleComponent = CbCardSubtitleComponent;
exports.CbCardBadgesComponent = CbCardBadgesComponent;
exports.CbCardModule = CbCardModule;
exports.CbSocialComponent = CbSocialComponent;
exports.CbSocialModule = CbSocialModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cubo-ui.umd.js.map
