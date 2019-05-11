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
    {
      name: 'food',
      script: './api/food.js',
      watch: true,
    },
    {
      name: 'recipe',
      script: './api/recipe.js',
      watch: true,
    },
  ],
};