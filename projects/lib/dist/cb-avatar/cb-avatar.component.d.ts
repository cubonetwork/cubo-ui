import { OnInit } from '@angular/core';
/**
* Component `<cb-avatar>` to create a avatar
* @param imageUrl Url of image
* @param imageAlt Alt of image
* @param type Avatar's type (circle / square)
* @param size Avatar's size (xsmall, small, medium, large, xlarge)
* @param lazyload Enable or disable the lazyload
*/
export declare class CbAvatarComponent implements OnInit {
    imageUrl: string;
    imageAlt: string;
    name: string;
    size: string;
    type: string;
    nameSplit: Array<String>;
    letters: String;
    getInitials(): void;
    ngOnInit(): void;
}
