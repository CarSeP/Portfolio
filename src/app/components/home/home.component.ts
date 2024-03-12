import { Component, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ProjectsComponent, SkillsComponent, ContactMeComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  langSvc = inject(LanguageService)

  constructor() {
    const lang = navigator.languages[0]
    if (lang.includes("es")) {
      this.langSvc.changeEs()
    } else {
      this.langSvc.changeEn()
    }
  }

}
