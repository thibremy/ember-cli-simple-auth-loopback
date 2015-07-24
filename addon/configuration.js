import loadConfig from 'simple-auth/utils/load-config';

var defaults = {
  serverTokenEndpoint:           '/api/users/login',
  serverTokenRevocationEndpoint: '/api/users/logout'
};

export default {
  serverTokenEndpoint: defaults.serverTokenEndpoint,
  serverTokenRevocationEndpoint: defaults.serverTokenRevocationEndpoint,
  load: loadConfig(defaults)
};