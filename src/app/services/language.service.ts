import { Injectable, computed, signal } from '@angular/core';
import * as JsonEn from "./../../assets/languages/English.json"
import * as JsonEs from "./../../assets/languages/Spanish.json"

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = signal<any>({});
  header: any = computed(() => this.language().header)
  home: any = computed(() => this.language().home)
  projecs: any = computed(() => this.language().projecs)
  skills: any = computed(() => this.language().skills)
  contactMe: any = computed(() => this.language().contactMe)

  changeEn() {
    this.language.update(value => JsonEn)
  }

  changeEs() {
    this.language.update(value => JsonEs)
  }
}
