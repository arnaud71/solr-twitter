var expect = require('expect.js'),
    SolrTwitter = require('..');

describe('solr-twitter', function() {
  it('should say hello', function(done) {
    expect(SolrTwitter()).to.equal('Hello, world');
    done();
  });
});
