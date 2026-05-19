import {getCliClient} from 'sanity/cli';
import fs from 'node:fs';

const client = getCliClient();
const {projectId} = client.config();

const {key} = await client.request<{key: string}>({
  uri: `projects/${projectId}/tokens`,
  method: 'post',
  body: {label: 'UploadScript', roleName: 'editor'},
});

const envPath = '.env';
const env = fs.readFileSync(envPath, 'utf8');
fs.writeFileSync(envPath, env.trimEnd() + `\nSANITY_WRITE_TOKEN=${key}\n`);
console.log('Editor token created and saved to .env as SANITY_WRITE_TOKEN');
