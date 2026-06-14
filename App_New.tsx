import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://meaowbpwyliwajcqzmed.supabase.co',
  'sb_secret_oz1nE_Q4fHkhp08eA_3rEw_PVk6W23S'
);

export default function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: cars } = await supabase.from('cars').select('*');
      if (cars) setData(cars);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', direction: 'rtl' }}>
      <h1>متجر Sooma-- للسيارات</h1>
      {data.map((item: any) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
