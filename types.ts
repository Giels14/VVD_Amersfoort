export interface Candidate {
  name: string;
  spot: string;
  defaultPhotoUrl?: string;
}

export interface FormData {
  name: string;
  spot: string;
  quote: string;
  photoUrl: string | null;
}

export type ImageSize = '1K' | '2K' | '4K';

export interface AIImageConfig {
  prompt: string;
  size: ImageSize;
  isLoading: boolean;
  error: string | null;
}