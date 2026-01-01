import { Component } from '@angular/core';
import { PAGES_NAME, PAGES_URL } from '../consts/pages';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-nav',
    templateUrl: 'navigation.component.html',
    styleUrl: 'navigation.component.css',
    imports: [RouterLink]
})
export class NavigationComponent {
    protected pages_url = PAGES_URL;
    protected pages_name = PAGES_NAME;
}