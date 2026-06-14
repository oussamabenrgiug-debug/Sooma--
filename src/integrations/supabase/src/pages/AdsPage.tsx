import { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';

export default function AdsPage() {
  const [phones, setPhones] = useState<any[]>([]);

  useEffect(() => {
    async function getPhones() {
      // هنا نطلب البيانات من جدول phones وليس ads
      const { data } = await supabase.from('phones').select('*');
      if (data) setPhones(data);
    }
    getPhones();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">هواتف Sooma</h1>
      {phones.map((phone: any) => (
        <div key={phone.id} className="border border-gray-700 p-4 my-3 rounded-xl bg-gray-900">
          <h2 className="text-lg font-bold">{phone.title}</h2>
          <p className="text-green-400">السعر: {phone.price_usd} دولار</p>
        </div>
      ))}
    </div>
  );
}
