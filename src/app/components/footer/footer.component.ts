import { Component, inject } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  infoSvc = inject(InfoService)
  info = this.infoSvc.info
  year = new Date(Date.now()).getFullYear()

}
