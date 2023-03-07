import { NextApiRequest, NextApiResponse, GetServerSideProps } from 'next';

import { geoPath } from 'd3-geo';
/* @ts-ignore */
import { geoSatellite } from 'd3-geo-projection';
import * as topojson from 'topojson-client';
import topology from './land-110m.json';

type Query = {
  country: string;
  city: string;
  latitude: string;
  longitude: string;
};

/* @ts-ignore */
const land = topojson.feature(topology, topology.objects.land);
const FONT_SIZE = 36;

/**
 * distance of the satellite observer from the earth
 * https://github.com/d3/d3-geo-projection#satellite_distance
 */
const distance = 8;
const w = 1000;
const h = 1000;
const radToDegree = 180 / Math.PI;

const projection = geoSatellite()
  .distance(distance)
  .clipAngle(Math.acos(1 / distance) * radToDegree)
  .translate([w / 2, h / 2])
  .scale(550)
  .precision(0.5);

const path = geoPath(projection);

function render({ city, country, latitude, longitude }: Query) {
  const coords = [+longitude, +latitude];

  // spin globe a little west of the user's location so that it isn't
  // dead centre, and tilt them slightly towards the vertical center
  projection.rotate([-coords[0] - 30, -coords[1] * (30 / 90), 0]);

  const dot = longitude && latitude ? projection([longitude, latitude]) : null;

  const MAX_LABEL_LENGTH = 27;
  const DEFAULT_LABEL = 'Your location';

  let label = [city, country].filter(Boolean).join(', ') || DEFAULT_LABEL;
  if (label.length > MAX_LABEL_LENGTH) label = city ?? DEFAULT_LABEL;
  if (label.length > MAX_LABEL_LENGTH) label = country ?? DEFAULT_LABEL;
  if (label.length > MAX_LABEL_LENGTH) label = DEFAULT_LABEL;

  return `<?xml version="1.0" encoding="UTF-8"?>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
			<style>
				path {
					stroke: none;
				}
				.ocean {
					fill: rgb(138,180,248);
				}
				.land {
					fill: rgb(148,210,165);
				}
				.highlight {
					fill: rgb(251,192,45);
				}
				.dot {
					fill: rgb(251,192,45);
					stroke: white;
					stroke-width: 5;
				}
				@media (prefers-color-scheme: dark) {
					.ocean {
						fill: rgb(120,120,120);
					}
					.land {
						fill: #222;
					}
					.dot {
						stroke: #222;
					}
				}
			</style>
			<path d="${path({ type: 'Sphere' })}" class="ocean"/>
			<path d="${path(land)}" class="land"/>
			${
        dot
          ? `
			<g transform="translate(${dot[0]},${dot[1]})">
				<circle r="20" class="dot"/>
				<rect x="50" y="-30" width="${
          FONT_SIZE * 0.6 * label.length + 40
        }" height="60" class="highlight"/>
				<polygon points="35,0 50,-10 50,10" class="highlight" />
				<text
					x="70"
					fill="white"
					text-anchor="start"
					alignment-baseline="middle"
					dominant-baseline="middle"
					style="font-family: 'Courier', 'Courier New'; font-size: ${FONT_SIZE}px; font-weight: bold"
				>${label.toUpperCase()}</text>
			</g>`
          : ''
      }
		</svg>
	`;
}

// Forward properties from `middleware.ts`
// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic here directly.
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: query as Query,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const svg = render(req.query as Query);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(svg);
}
