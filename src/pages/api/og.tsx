import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { allDocuments } from 'contentlayer/generated';

export const config = {
  runtime: 'experimental-edge',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function og(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const slug = searchParams.get('slug');
  if (!slug) {
    return new ImageResponse(<>Hello world</>, {
      width: 1200,
      height: 630,
    });
  }

  const document = allDocuments.find((doc) => doc.slug === slug);
  if (!document) {
    return new ImageResponse(<>Hello world</>, {
      width: 1200,
      height: 630,
    });
  }

  const { title, excerpt } = document;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="flex">
          <div>{title}</div>
          <div>{excerpt}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
