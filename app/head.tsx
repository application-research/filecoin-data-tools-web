import DefaultMetaTags from '@components/DefaultMetaTags';

export default async function Head({ params }) {
  const title = 'Filecoin Data Tools';
  const description = "Filecoin Data Tools uses the power of Filecoin, the world's largest decentralized storage network.";
  const url = 'filecoindata.tools';

  // SUMMARY_LARGE_IMAGE: 1500x785
  return (
    <>
      <title>{title}</title>
      <DefaultMetaTags />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
    </>
  );
}
