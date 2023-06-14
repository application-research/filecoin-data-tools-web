import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import SectionHomepage from '@root/components/SectionHomepage';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <SectionHomepage />
    </DefaultLayout>
  );
}
