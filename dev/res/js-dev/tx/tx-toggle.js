/* jshint browser:true */

'use strict';

function activate(object, className) {
  object.className += ` ${className}`;
}

function deactivate(object, className) {
  object.className = object.className.replace(` ${className}`, '');
}

function state(object, className) {
  return object.className.indexOf(className) > -1;
}

function toggle(object, className, externalState) {
  var triggerState = typeof externalState !== 'undefined' ? externalState : state(object, className);
  if (triggerState) {
    deactivate(object, className);
  } else {
    activate(object, className);
  }
}

exports.toggle = toggle;
exports.activate = activate;
exports.deactivate = deactivate;
exports.state = state;