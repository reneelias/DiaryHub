module.exports = { 
  apps: [
    {
      name: 'gateway',
      script: './api/gateway.js',
      watch: true,
    },
    {
      name: 'user',
      script: './api/user.js',
      watch: true,
    },
  ],
};