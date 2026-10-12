import { BookOpen, Feather, Film, PenTool, type LucideProps } from 'lucide-react';
import type { ModuleId } from '../data/types';

const icons = { common: Film, 'module-a': Feather, 'module-b': BookOpen, 'module-c': PenTool } as const;

export function ModuleIcon({ id, ...props }: { id: ModuleId } & LucideProps) {
  const Icon = icons[id];
  return <Icon {...props} />;
}
