module.exports = { 
  apps: [
    {
      name: 'index',
      script: './api/index.js',
      watch: true,
    },
    {
      name: 'daily',
      script: './api/endpoints/daily.js',
      watch: true,
    },
  ],
};