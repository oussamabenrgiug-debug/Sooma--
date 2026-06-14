import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://meaowbpwyliwajcqzmed.supabase.co', 
  'sb_secret_oz1nE_Q4fHkhp08eA_3rEw_PVk6W23S'
);

export default function App() {
  useEffect(() => {
    async function getData() {
      // جلب البيانات من جدول الهواتف
      const { data: phones, error: phonesError } = await supabase.from('phones').select('*');
      
      // جلب البيانات من جدول السيارات
      const { data: cars, error: carsError } = await supabase.from('cars').select('*');
      
      if (phonesError) console.error('خطأ في جدول phones:', phonesError);
      else console.log('بيانات الهواتف:', phones);

      if (carsError) console.error('خطأ في جدول cars:', carsError);
      else console.log('بيانات السيارات:', cars);
    }
    getData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>تم تحديث التطبيق</h1>
      <p>جاري جلب البيانات من جداول الهواتف والسيارات...</p>
      <p>افتح الـ Console لرؤية النتائج.</p>
    </div>
  );
}
