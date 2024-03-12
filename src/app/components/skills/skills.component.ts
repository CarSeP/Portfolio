import { Component, inject } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './skills.component.html',
  styles: ``
})
export class SkillsComponent {
  langSvc = inject(LanguageService)
  baseURL: string = "./../../../assets/svg/"
  skillsList = [
    {
      title: "FrontEnd",
      skill: [
        {
          title: "HTML",
          url: this.baseURL + "html.svg"
        },
        {
          title: "CSS",
          url: this.baseURL + "css.svg"
        },
        {
          title: "JavaScript",
          url: this.baseURL + "js.svg"
        },
        {
          title: "TypeScript",
          url: this.baseURL + "ts.svg"
        },
        {
          title: "Angular",
          url: this.baseURL + "angular.svg"
        },
        {
          title: "Tailwind CSS",
          url: this.baseURL + "tailwind.svg"
        },
        {
          title: "Vite",
          url: this.baseURL + "vite.svg"
        }
      ]
    },
    {
      title: "BackEnd",
      skill: [
        {
          title: "MongoDB",
          url: this.baseURL + "mongo.svg"
        },
        {
          title: "SQL",
          url: this.baseURL + "sql.svg"
        }
      ]
    },
    {
      title: this.langSvc.skills().tools,
      skill: [
        {
          title: "Trello",
          url: this.baseURL + "trello.svg"
        },
        {
          title: "VS Code",
          url: this.baseURL + "vscode.svg"
        },
        {
          title: "Git",
          url: this.baseURL + "git.svg"
        },
        {
          title: "Github",
          url: this.baseURL + "github2.svg"
        }
      ]
    },
    {
      title: this.langSvc.skills().learning,
      skill: [
        {
          title: "Java",
          url: this.baseURL + "java.svg"
        },
        {
          title: "Spring Boot",
          url: this.baseURL + "spring.svg"
        }
      ]
    }
  ]
}
