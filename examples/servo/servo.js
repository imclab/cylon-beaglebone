var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'beaglebone', adaptor: 'beaglebone' },
  device: { name: 'servo', driver: 'servo', pin: 'P9_14' },

  work: function(my) {
    var angle, increment;
    angle = 30;
    increment = 40;
    every(1..seconds(), function() {
      angle += increment;
      my.servo.angle(angle);
      console.log("Current Angle: " + (my.servo.currentAngle()));

      if ((angle === 30) || (angle === 150)) {
        increment = -increment;
      }
    });
  }
}).start();
