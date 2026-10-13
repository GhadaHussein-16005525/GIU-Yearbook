import { Component, input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Student} from '../../models/student.model';

@Component({
  imports: [RouterLink],
  selector: 'app-student-card',
  styleUrl: './student-card.css',
  templateUrl: './student-card.html',
})
export class StudentCard {
  readonly student = input.required<Student>();
  private readonly imageFailed = signal(false);

  protected readonly photoSrc = computed(() =>
  this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo);
  protected onImageError() : void {
    this.imageFailed.set(true);
  }
}
