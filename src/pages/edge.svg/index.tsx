import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Query = {
  country: string;
  city: string;
  region: string;
  latitude: string;
  longitude: string;
};

// Forward properties from `middleware.ts`
// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic here directly.
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: query as Query,
  };
};

export default function Index({
  city,
  region,
  country,
  latitude,
  longitude,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  city = decodeURIComponent(city);
  return (
    <>
      {city} {region} {country} {latitude} {longitude}
    </>
  );
}
