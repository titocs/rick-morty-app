// store.ts
import { atom } from 'recoil';

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    id: string;
    name: string;
  } | null;
}

export const characterState = atom<Character | null>({
  key: 'characterState',
  default: null,
});