import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { SummaryComponent } from './summary/summary.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsComponent } from './skills/skills.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoComponent, SummaryComponent,ProjectsComponent,ExperienceComponent,EducationComponent,AchievementsComponent,SkillsComponent,CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myResume';
}
