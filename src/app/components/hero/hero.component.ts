import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { InfoService } from '../../services/info.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
  langSvc = inject(LanguageService)
  infoSvc = inject(InfoService)
  info = this.infoSvc.info

}
