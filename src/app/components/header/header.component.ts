import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  class = signal(true)
  langSvc = inject(LanguageService)
  lang = [
    {
      id: "en",
      name: "English",
      flag: "./../../../assets/svg/uk.svg"
    },
    {
      id: "es",
      name: "Español",
      flag: "./../../../assets/svg/spain.svg"
    }
  ]

  toggleClass() {
    this.class.update(value => !value)
  }

  translate(value: string) {
    switch (value) {
      case "en":
        this.langSvc.changeEn()
        break
      case "es":
        this.langSvc.changeEs()
        break
    }
    this.toggleClass()
  }

}
