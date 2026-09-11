// src/lib/supabase.ts
export const supabase = {
  from: () => ({
    insert: async (data: any) => {
      console.log('Mocked submission (Supabase disabled):', data);
      return { data: null, error: null };
    },
    select: async () => ({ data: [], error: null }),
  }),
};