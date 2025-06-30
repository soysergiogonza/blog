import { Component } from "@angular/core";
import { SidebarComponent } from "./core/layout/sidebar/sidebar.component";

@Component({
	selector: "app-root",
	imports: [SidebarComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {}
