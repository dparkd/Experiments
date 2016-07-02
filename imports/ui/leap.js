import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import Cylon from 'cylon';
import cylonleapmotion from 'cylon-leapmotion';
const cylon = require('cylon');

import './leap.html';

Template.leap.rendered = function() {
  cylon.robot({
      connections: {
        leapmotion: { adaptor: 'leapmotion' }
      },

      devices: {
        leapmotion: { driver: 'leapmotion' }
      },

      work: function(my) {
        my.leapmotion.on('hand', function(hand) {
          Session.set('x', hand.palmX/10);
          Session.set('y', hand.palmY/10);
          console.log(hand.palmY);
          Session.set('z', hand.palmZ/10);
        });
      }
    }).start();
}


// display locations
Template.leap.helpers({
  x() {
    return Session.get('x');
  },
  y() {
    return Session.get('y');
  },
  z() {
    return Session.get('z');
  }
});