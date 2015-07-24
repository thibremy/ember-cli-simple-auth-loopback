import loadConfig from 'simple-auth/utils/load-config';

var defaults = {
  serverTokenEndpoint: '/api/users/login',
  serverTokenRevocationEndpoint: '/api/users/logout',
  ttl: 1209600
};

export default {
  serverTokenEndpoint: defaults.serverTokenEndpoint,
  serverTokenRevocationEndpoint: defaults.serverTokenRevocationEndpoint,
  load: loadConfig(defaults)
};