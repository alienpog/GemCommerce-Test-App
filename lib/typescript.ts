/**
 * Shared Type Definitions
 * -----------------------
 * Centralized TypeScript interfaces that define the shape
 * of reusable content structures used across the application.
 *
 * These interfaces enforce consistency between data sources
 * and the UI components that consume them.
 *
 * - `Feature`: Represents a single product feature or benefit
 * - `InfoSection`: Represents a configurable text-and-image
 *   content section with optional layout reversal
 */

export interface Feature {
  name: string;
  content: string;
  icon: string;
}

export interface InfoSection {
  flip: boolean;
  header: string;
  body: string;
  image: string;
}