/**
 * Types we need so far. We'll add more when we need them.
 */

/** A 9×9 grid. 0 = empty cell. */
export type Board = number[][];

/** What the GET /board API returns. */
export interface BoardResponse {
  board: Board;
}

/** What the POST /validate API returns. */
export interface ValidateResponse {
  status: string;
}

/** What the POST /solve API returns. */
export interface SolveResponse {
  solution: Board;
  status?: string;
  difficulty?: string;
}
