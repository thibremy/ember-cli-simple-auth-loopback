import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import Configuration from '../configuration';

export default Base.extend({

    serverTokenEndpoint: '/api/users/login',
    serverTokenRevocationEndpoint: '/api/users/logout',

    init() {
        this.serverTokenEndpoint = Configuration.serverTokenEndpoint;
        this.serverTokenRevocationEndpoint = Configuration.serverTokenRevocationEndpoint;
    },

    restore(data) {
        console.log('restore');
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    makeRequest(url, data) {
        return Ember.$.ajax({
            url: url,
            type: 'POST',
            data: data,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded'
        });
    },

    authenticate(options) {
        var self = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
            let data = {
                ttl: 1209600,
                username: options.identification,
                password: options.password
            };
            self.makeRequest(self.serverTokenEndpoint, data).then(function (response) {
                console.log("makeRequest", response);
                Ember.run(function () {

                    resolve(response);
                });
            }, function (xhr) {
                Ember.run(function () {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    },

    invalidate() {
        return Ember.RSVP.resolve();
    }
});