import { Component, inject } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { InfoService } from '../../services/info.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './contact-me.component.html',
  styles: ``
})
export class ContactMeComponent {
  langSvc = inject(LanguageService)
  infoSvc = inject(InfoService)
  info = this.infoSvc.info

  copy(){
    navigator.clipboard.writeText(this.info.mail)
  }
}
