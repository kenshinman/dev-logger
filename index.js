"use strict";

/**
 * Only logs to the console in devolopment mode
 *
 */

// will add more functionalities

const devLog = (...args) => {
  if (process.env.NODE_ENV === "development") {
    args.forEach((arg, i) => {
      console.log(`arg ${i} => `, arg);
    });
    return args;
  }
};

module.exports = devLog;
