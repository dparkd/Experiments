import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'; 
import { check } from 'meteor/check';

export const Locations = new Mongo.Collection('locations'); 

if (Meteor.isServer) {
  Meteor.publish('locations', function tasksPublication() {
    return Locations.find();
  });
}

Meteor.methods({
});
