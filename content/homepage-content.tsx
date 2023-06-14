import { BlockTypeEnum, CallToActionVariantEnum } from '@root/common/types';

export const HOMEPAGE_HERO_CONTENT = {
  title: 'Compute & Storage technologies built on @Filecoin',
  cta: [
    {
      type: CallToActionVariantEnum.GRADIENT,
      target: '_self',
      text: 'Learn More',
      link: '#learn-more',
    },
    {
      type: CallToActionVariantEnum.BORDER_LIGHT,
      target: '_blank',
      text: 'Read Documentation',
      link: 'https://docs.filecoindata.tools/about/',
    },
  ],
  paragraphs: [
    {
      paragraph:
        'Filecoin Data Tools is a set of compute and storage technologies built on top of the Filecoin Network. The Filecoin Network is a decentralized storage network with network revenue and incentivization built in. We recognize that the cloud has a great developer experience. Therefore, it is an ambition of ours to achieve the benefits of cloud-level DX alongside the transparent and open-source incentivization layers decentralized networks can provide.',
    },
    {
      paragraph:
        'This technology stack includes various components such as computing, storage, and networking resources that developers can use to build decentralized applications. The components provided by Filecoin Data Tools are designed to be scalable, flexible, and secure, making the offering suitable for a wide range of use cases.',
    },
  ],
};

export const SIDEBAR_HOMEPAGE_CONTENT = [
  {
    name: 'About',
  },
  {
    name: 'Partnerships',
  },
  {
    name: 'Data Onboarding Services',
  },
  {
    name: 'Data Preparation',
  },
  {
    name: 'Storage Market',
  },
  {
    name: 'Next Steps',
  },
];

export const HOMEPAGE_BLOCKS_CONTENT = [
  {
    id: 'learn-more',
    title: 'Current and Past Partners',
    direction: 'row',
  },
  {
    id: 'learn-more',
    title: 'Data Onboarding Services',
    direction: 'row',
  },
  {
    id: 'learn-more',
    title: 'Data Preparation',
    direction: 'row',
  },
  {
    id: 'learn-more',
    title: 'Storage Market',
    direction: 'row',
  },
];
