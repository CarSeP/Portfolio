import { Component, inject } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {
  langSvc = inject(LanguageService)
  baseURL: string = "./../../../assets/svg/"
  projectsList = {
    major: [
      {
        title: "Chatbot",
        img: "./../../../assets/img/02.webp",
        codeLink: "https://github.com/CarSeP/Chatbot",
        websiteLink: "https://carsep-chatbot.netlify.app",
        description: [
          {
            id:"en",
            value:"This project is designed in Tailwind and Angular, and uses the openai api and the gpt-3.5-turbo-instruct model. The purpose of this project is to learn how to use APIs in projects."
          },
          {
            id:"es",
            value:"Este proyecto está diseñado en Tailwind y Angular, y utiliza la api openai y el modelo gpt-3.5-turbo-instruct. El propósito de este proyecto es aprender a utilizar APIs en proyectos."
          }
        ],
        technologies: [
          this.baseURL + "angular.svg", this.baseURL + "ts.svg", this.baseURL + "tailwind.svg"
        ]
      }
    ],
    minor: [
      {
        title: "ToDoList",
        codeLink: "https://github.com/CarSeP/To-Do-List",
        websiteLink: "https://carsep-todolist.netlify.app",
        technologies: [
          this.baseURL + "html.svg", this.baseURL + "css.svg", this.baseURL + "js.svg"
        ]
      },
      {
        title: "WeatherApp",
        codeLink: "https://github.com/CarSeP/WeatherApp",
        websiteLink: "https://carsep-weatherapp.netlify.app",
         technologies: [
          this.baseURL + "html.svg", this.baseURL + "css.svg", this.baseURL + "js.svg"
        ]
      },
    ]
  }
}
