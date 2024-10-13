import { Component, OnInit } from '@angular/core';
import { ListService, Theme } from '../../service/list.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  themes: Theme[] = [];
  constructor(private listService: ListService) {}
  ngOnInit(): void {
    this.themes = this.listService.getThemes();
    this.displayThemeButtons();
  }
  displayThemeButtons(): void {
    const btnContainer = document.querySelector(
      '.theme-btn-container'
    ) as HTMLElement;
    if (btnContainer) {
      this.themes.forEach((theme: Theme) => {
        const div = document.createElement('div');
        div.className = 'theme-btn';
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);

        div.addEventListener('click', () => this.listService.setTheme(theme));
      });
    }
  }
}
