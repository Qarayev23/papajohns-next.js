import Campaigns from '@/components/campaigns';
import { fetchCampaigns } from '@/utils/api';

const Page = async () => {
  const data = await fetchCampaigns()

  return (
    <section>
      <div className="g-container">
        <Campaigns data={data} />
      </div>
    </section>
  );
};

export default Page