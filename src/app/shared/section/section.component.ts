import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styles: ``
})
export class SectionComponent {
  @Input({required:true}) title!:string
  @Input({required:true}) id!:string
  @Input({required:true}) icon!:string

}
