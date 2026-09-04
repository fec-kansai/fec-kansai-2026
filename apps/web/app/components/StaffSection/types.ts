export type Staff = {
  displayName: string;
  icon: string;
} & (
  | { x: string; anyLink?: never }
  | { x?: never; anyLink: string }
  | { x?: never; anyLink?: never }
);
