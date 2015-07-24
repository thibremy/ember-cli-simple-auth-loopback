import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
    authorize(jqXHR) {
    	let isAuth = this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.secure.id'));
        if (isAuth) {
            jqXHR.setRequestHeader('Authorization', this.get('session.secure.id'));
        }
    }
});