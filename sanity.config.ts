/**
 * This file is used by the Sanity CLI to load the project configuration.
 * @example `sanity schema extract`
 *
 * @see https://www.sanity.io/docs/cli
 *
 * NOTE: Sanity CLI will load environment variables
 */
import {defineSanityConfig} from './app/sanity/config';

const projectId = process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID || 'gjecvxkg';
const dataset = process.env.PUBLIC_SANITY_STUDIO_DATASET || 'production';
const shopifyStoreDomain = process.env.PUBLIC_STORE_DOMAIN || '';

export default defineSanityConfig({
  projectId,
  dataset,
  shopifyStoreDomain,
});
