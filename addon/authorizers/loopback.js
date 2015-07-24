import Ember from 'ember';
import Base from  'simple-auth/authorizers/base';

export default Base.extend({
    authorize(jqXHR, requestOptions) {
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.secure.token'))) {
            jqXHR.setRequestHeader('Authorization', this.get('session.secure.token'));
        }
    }
});