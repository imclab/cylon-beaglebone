/*
 * cylon-beaglebone
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

require("cylon");
require("./beaglebone");
var GPIO = require("cylon-gpio");
var I2C = require("cylon-i2c");

module.exports = {
  adaptor: function(args) {
    return new Cylon.Adaptors.Beaglebone(args);
  },

  driver: function(args) {
    return(GPIO.driver.apply(GPIO, args) || I2C.driver.apply(I2C, args));
  },

  register: function(robot) {
    Logger.debug("Registering Beaglebone adaptor for " + robot.name);
    robot.registerAdaptor('cylon-beaglebone', 'beaglebone');

    GPIO.register(robot);
    I2C.register(robot);
  }
};
