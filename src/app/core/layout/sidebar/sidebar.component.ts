import { MediaMatcher } from "@angular/cdk/layout";
import { NgOptimizedImage } from "@angular/common";
import { Component, inject, type OnDestroy, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardImage } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
	selector: "app-sidebar",
	templateUrl: "sidebar.component.html",
	styleUrl: "sidebar.component.css",
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatCardImage,
		NgOptimizedImage,
		MatTooltipModule,
	],
})
export class SidebarComponent implements OnDestroy {
	protected logo = "assets/Logo.svg";
	protected readonly fillerNav = Array.from(
		{ length: 50 },
		(_, i) => `Nav Item ${i + 1}`,
	);

	protected readonly fillerContent = Array.from(
		{ length: 50 },
		() =>
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	);

	protected readonly isMobile = signal(true);

	private readonly _mobileQuery: MediaQueryList;
	private readonly _mobileQueryListener: () => void;

	constructor() {
		const media = inject(MediaMatcher);

		this._mobileQuery = media.matchMedia("(max-width: 600px)");
		this.isMobile.set(this._mobileQuery.matches);
		this._mobileQueryListener = () =>
			this.isMobile.set(this._mobileQuery.matches);
		this._mobileQuery.addEventListener("change", this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this._mobileQuery.removeEventListener("change", this._mobileQueryListener);
	}

	protected readonly shouldRun =
		/(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
