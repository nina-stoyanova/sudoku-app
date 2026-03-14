import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import type {
  Board,
  BoardResponse,
  SolveResponse,
  ValidateResponse,
} from '../models/sudoku.types';

const API_URL = 'https://sugoku.onrender.com';

@Injectable({ providedIn: 'root' })
export class SudokuApiService {
  constructor(private http: HttpClient) {}

  getBoard(difficulty: string): Observable<BoardResponse> {
    return this.http
      .get<BoardResponse>(`${API_URL}/board?difficulty=${difficulty}`)
      .pipe(tap((response) => console.log('getBoard response', response)));
  }

  validateBoard(board: Board): Observable<ValidateResponse> {
    const body = new HttpParams().set('board', JSON.stringify(board));
    return this.http
      .post<ValidateResponse>(`${API_URL}/validate`, body)
      .pipe(tap((response) => console.log('validateBoard response', response)));
  }

  solveBoard(board: Board): Observable<SolveResponse> {
    const body = new HttpParams().set('board', JSON.stringify(board));
    return this.http
      .post<SolveResponse>(`${API_URL}/solve`, body)
      .pipe(tap((response) => console.log('solveBoard response', response)));
  }
}
