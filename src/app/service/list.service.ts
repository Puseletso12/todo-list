import { Injectable } from '@angular/core';

export interface Theme {
  background: string;
  color: string;
  primaryColor: string;
  glassColor?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  themes: Theme[] = [
    {
      background: '#1A1A2E',
      color: '#FFFFFF',
      primaryColor: '#0F3460',
    },
    {
      background: '#461220',
      color: '#FFFFFF',
      primaryColor: '#E94560',
    },
    {
      background: '#192A51',
      color: '#FFFFFF',
      primaryColor: '#967AA1',
    },
    {
      background: '#F7B267',
      color: '#000000',
      primaryColor: '#F4845F',
    },
    {
      background: '#F25F5C',
      color: '#000000',
      primaryColor: '#642B36',
    },
    {
      background: '#231F20',
      color: '#FFF',
      primaryColor: '#BB4430',
    },
  ];
  getThemes(): Theme[] {
    return this.themes;
  }

  setTheme(theme: Theme): void {
    const root = document.querySelector(':root') as HTMLElement;
    if (root) {
      root.style.setProperty('--background', theme.background);
      root.style.setProperty('--color', theme.color);
      root.style.setProperty('--primary-color', theme.primaryColor);

      if (theme.glassColor) {
        root.style.setProperty('--glass-color', theme.glassColor);
      }
    }
  }
}
