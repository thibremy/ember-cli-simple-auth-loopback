import Authenticator from '../authenticators/loopback';
import Authorizer from '../authorizers/loopback';
import Configuration from '../configuration';

export function initialize(container /* , application */ ) {
    let ENV = container.lookupFactory('config:environment');
   	Configuration.load(container, ENV['simple-auth-loopback'] || {});
    container.register('simple-auth-authorizer:loopback', Authorizer);
    container.register('simple-auth-authenticator:loopback', Authenticator);
}

export default {
    name: 'simple-auth-loopback',
    before: 'simple-auth',
    initialize: initialize
};