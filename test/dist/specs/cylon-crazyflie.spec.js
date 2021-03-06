(function() {
  'use strict';
  var crazyflie, namespace;

  namespace = require('node-namespace');

  crazyflie = source("cylon-crazyflie");

  describe("Cylon.Crazyflie", function() {
    it("standard async test", function(done) {
      var bool;
      bool = false;
      bool.should.be["false"];
      setTimeout(function() {
        bool.should.be["false"];
        bool = true;
        return bool.should.be["true"];
      });
      150;
      setTimeout(function() {
        bool.should.be["true"];
        return done();
      });
      return 300;
    });
    it("standard sync test", function() {
      var data, obj;
      data = [];
      obj = {
        id: 5,
        name: 'test'
      };
      data.should.be.empty;
      data.push(obj);
      data.should.have.length(1);
      data[0].should.be.eql(obj);
      return data[0].should.be.equal(obj);
    });
    it("can register", function() {
      return crazyflie.register.should.be.a('function');
    });
    it("can create adaptor", function() {
      return crazyflie.adaptor.should.be.a('function');
    });
    return it("can create driver", function() {
      return crazyflie.driver.should.be.a('function');
    });
  });

}).call(this);
