import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Categories } from '@/app/features/to-do/categories/interfaces/categories.interface';
import { Task } from '@/app/features/to-do/tasks/interfaces/tasks.interface';

export type PreferencesKey = 'tasks' | 'categories';

interface RawTask {
  id: string;
  description: string;
  completed: boolean | string;
  category: string;
}

interface RawCategory {
  id: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CapacitorPreferencesHelperService {
  async saveToPreferences(key: PreferencesKey, value: Task[] | Categories[]): Promise<void> {
    await Preferences.set({ key, value: JSON.stringify(value) });
  }

  async getToTasksPreferences(): Promise<Task[]> {
    const { value } = await Preferences.get({ key: 'tasks' });

    if (!value) return [];

    const rawTasks: RawTask[] = JSON.parse(value) as RawTask[];

    return rawTasks.map((rawTask) => ({
      id: String(rawTask.id),
      description: rawTask.description,
      completed: rawTask.completed === true || rawTask.completed === 'true',
      category: String(rawTask.category),
    }));
  }

  async getToCategoriesPreferences(): Promise<Categories[]> {
    const { value } = await Preferences.get({ key: 'categories' });

    if (!value) return [];

    const rawCategories: RawCategory[] = JSON.parse(value) as RawCategory[];

    return rawCategories.map((rawCategory) => ({
      id: String(rawCategory.id),
      description: rawCategory.description,
    }));
  }

  async deleteAllPreferences(key: PreferencesKey): Promise<void> {
    await Preferences.remove({ key });
  }
}
