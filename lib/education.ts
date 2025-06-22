import { supabase } from '@/lib/supabase.';
// Define the interface for your education entries for type safety
export interface EducationEntry {
  id: string;
  created_at: string;
  degree: string;
  institution: string;
  location: string | null;
  start_date: string; // Assuming TEXT in Supabase for flexibility ('Jan 2020', 'Present')
  end_date: string | null; // Assuming TEXT in Supabase, nullable for 'Present'
  gpa: string | null;
  description: string | null;
  order_index: number | null;
}

export async function getEducationDetails(): Promise<EducationEntry[]> {
//   const createClient = supabase;

  const { data, error } = await supabase
    .from('education')
    .select('*') // Select all columns
    .order('order_index', { ascending: true }) // Sort by your custom order index first
    .order('start_date', { ascending: false }); // Then by start_date (most recent first)

  if (error) {
    console.error('Error fetching education details:', error);
    // You might want to handle this more gracefully, e.g., return [];
    throw new Error('Could not fetch education details.');
  }

  return data as EducationEntry[];
}