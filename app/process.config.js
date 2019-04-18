module.exports = { 
  apps: [
    {
      name: 'index',
      script: './api/index.js',
      watch: true,
    },
    {
      name: 'daily',
      script: './api/services/daily.js',
      watch: true,
    },
  ],
};