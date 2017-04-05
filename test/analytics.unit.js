'use strict';

const sinon = require('sinon');
const expect = require('chai').expect;
const StorjAnalytics = require('../lib/analytics');
const Analytics = require('analytics-node');

const storjAnalytics = new StorjAnalytics('not a real key', {});

describe('StorjAnalytics', function() {

  describe('#track', function () {

    const sandbox = sinon.sandbox.create();
    beforeEach(() => sandbox.stub(Analytics.prototype, 'track'));
    afterEach(() => sandbox.restore());

    it('should respect dnt headers', function(done) {
      expect(storjAnalytics.track('1', {})).to.equal(false);
      done();
    });

    it('should call super', function (done) {
      storjAnalytics.track(0, {});
      sinon.assert.calledOnce(Analytics.prototype.track);
      done();
    });
  });

  describe('#identify', function () {

    const sandbox = sinon.sandbox.create();
    beforeEach(() => sandbox.stub(Analytics.prototype, 'identify'));
    afterEach(() => sandbox.restore());

    it('should respect dnt headers', function (done) {
      expect(storjAnalytics.identify('1', {})).to.equal(false);
      done();
    });

    it('should call super', function (done) {
      storjAnalytics.identify(0, {traits: {}});
      sinon.assert.calledOnce(Analytics.prototype.identify);
      done();
    });

    it('should add message.traits if there is none', function (done) {
      storjAnalytics.identify(0, {});
      sinon.assert.calledWith(
        Analytics.prototype.identify,
        {
          traits: {
            email: 'undefined@user.storj.io'
          }
        },
        undefined);
      done();
    });

    it('should add an email to message.traits', function (done) {
      storjAnalytics.identify(0, {userId: 'a', traits: {}});
      sinon.assert.calledWith(
        Analytics.prototype.identify,
        {
          userId: 'a',
          traits: {
            email: 'a@user.storj.io'
          }
        },
        undefined);
      done();
    });
  });
});
