###
 * cylon crazyflie commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';

namespace = require 'node-namespace'

namespace "Cylon.Crazyflie", ->
  @Commands = [
    'takeoff',
    'land',
    'hover',
    'setPitch',
    'setYaw',
    'setThrust',
    'shutdown',
    'setParam'
  ]
