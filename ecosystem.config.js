module.exports = {
  apps : [{
    name: 'API',
    script: 'bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '49.232.43.50',
      ref  : 'origin/master',
      repo : 'git@github.com:Hanhh/github-api.git',
      path : '/var/www/',
      'post-deploy' : 'cd src && npm install && pm2 reload ../ecosystem.config.js --env production'
    }
  }
};
