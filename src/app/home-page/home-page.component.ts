import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  recentProjects = signal<string[]>([
    'Project 1',
    'Project 2',
    'Project 3'
  ]);

  loadNewProject() {
    console.log('Loading a new project...');

    this.recentProjects.update((projects) => [...projects, 'Coding Project']);
  }

}
