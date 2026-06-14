import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// استبدل القيم أدناه بالقيم التي لديك في Supabase
const supabase = createClient('URL_SUPABASE_الخاص_بك', 'ANON_KEY_الخاص_بك');

export default function App() {
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('اسم_الجدول_الخاص_بك').select('*');
      if (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      } else {
        console.log('تم جلب البيانات بنجاح:', data);
        alert('تم العثور على البيانات! تحقق من الـ Console');
      }
    }
    fetchData();
  }, []);

  return <h1>مرحباً، افتح الـ Console في المتصفح لرؤية البيانات!</h1>;
}
