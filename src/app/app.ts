import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import type { Board } from './models/sudoku.types';
import { SudokuApiService } from './services/sudoku-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [
    `
      .board { display: inline-block; border: 1px solid #333; }
      .board-row { display: flex; }
      .cell {
        width: 1.8rem; height: 1.8rem;
        display: flex; align-items: center; justify-content: center;
        border: 1px solid #ccc; font-size: 0.9rem;
      }
    `,
  ],
})
export class App implements OnInit {
  board: Board | null = null;
  loading = false;
  error: string | null = null;

  constructor(private sudokuApi: SudokuApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.sudokuApi.getBoard('easy').subscribe({
      next: (res) => {
        this.board = res.board;
        this.loading = false;
        this.error = null;
      },
      error: (err) => {
        this.error = err.message ?? 'Failed to load board';
        this.loading = false;
      },
    });
  }
}
