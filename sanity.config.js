// sanity.config.js
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: 'btp-sanity',
  projectId: 'uy12p7sm',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
