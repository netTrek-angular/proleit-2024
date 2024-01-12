import {computed, effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  readonly theme = signal<'light' | 'dark'>(localStorage.getItem('selectedTheme') as 'light' | 'dark' || 'light')
  private readonly localStorgeEff = effect(
    () => localStorage.setItem('selectedTheme', this.theme() ),
  )
  readonly isDark = computed( () => this.theme() === 'dark' );
  readonly isLight = computed( () => !this.isDark() );

  private linkRef!: HTMLLinkElement;

  constructor() {
    this.linkRef = document.createElement('link');
    this.linkRef.rel = 'stylesheet';
    this.linkRef.type = 'text/css';
    document.head.appendChild(this.linkRef);
    this.setTheme();
  }

  setTheme(theme?: 'light' | 'dark') {
    const selectedTheme = theme || this.theme();
    if ( this.linkRef.href.indexOf(selectedTheme) === -1 ) {
      this.linkRef.href = `${selectedTheme}.css`;
      selectedTheme === this.theme() || this.theme.set( selectedTheme );
    }
  }

}
