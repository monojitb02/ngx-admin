import {Component, Input} from '@angular/core';
import { NbThemeService, NbPopoverDirective } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
  selector: 'ngx-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {

  @Input() popover: NbPopoverDirective;

  theme: NbJSThemeOptions;

  themes = [
    {
      title: 'Light',
      key: 'default',
    },
    {
      title: 'Cosmic',
      key: 'cosmic',
    },
    {
      title: 'Corporate',
      key: 'corporate',
    },
  ];

  constructor(
    private themeService: NbThemeService,
    private analyticsService: AnalyticsService,
  ) {}

  onToggleTheme(themeKey: string) {
    this.themeService.changeTheme(themeKey);
    this.analyticsService.trackEvent('switchTheme');
  }
}
