import { defineConfig } from 'csvgtocss';

export default defineConfig({
  src: 'public/svgIcon', // svg path
  dist: 'styles/icon', // output path
  prefix: 'icon', // font name,
  exportJson: true, // export json file
});
