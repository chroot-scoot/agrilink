import { atom, useAtom } from 'jotai';
import { Post, posts } from '@/app/dashboard/community/data';

type Config = {
  selected: Post['id'] | null;
};

const configAtom = atom<Config>({
  selected: posts[0].id,
});

export function usePost() {
  return useAtom(configAtom);
}
