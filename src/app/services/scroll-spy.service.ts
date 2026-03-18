import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private activeSectionSubject = new BehaviorSubject<string>('');
  
  activeSection$ = this.activeSectionSubject.asObservable();
  
  setActiveSection(sectionId: string) {
    // Only update if we have a valid section ID
    if (sectionId && sectionId.trim() !== '' && !sectionId.startsWith('.')) {
      console.log('ScrollSpyService setting active section:', sectionId);
      this.activeSectionSubject.next(sectionId);
    }
  }
  
  getActiveSection(): string {
    return this.activeSectionSubject.value;
  }
  
  // Method to manually set active section (for clicks)
  setActiveSectionManual(sectionId: string) {
    if (sectionId && sectionId.trim() !== '') {
      console.log('ScrollSpyService manual setting active section:', sectionId);
      this.activeSectionSubject.next(sectionId);
    }
  }
}
