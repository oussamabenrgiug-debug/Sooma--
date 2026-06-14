import { useEffect, useState } from 'react';
import { supabase } from '../integrations/supabase/client';

export default function AdsPage() {
  const [ads, setAds] = useState<any[]>([]);

  useEffect(() => {
    async function getAds() {
      const { data } = await supabase.from('ads').select('*');
      if (data) setAds(data);
    }
    getAds();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">إعلانات Sooma</h1>
      {ads.map((ad: any) => (
        <div key={ad.id} className="border border-gray-700 p-4 my-3 rounded-xl bg-gray-900">
          <h2 className="text-lg font-bold">{ad.title}</h2>
          <p className="text-green-400">{ad.price} دج</p>
        </div>
      ))}
    </div>
  );
}
