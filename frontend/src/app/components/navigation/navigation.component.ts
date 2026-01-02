import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PAGES_NAME, PAGES_URL } from '../../consts/pages';

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