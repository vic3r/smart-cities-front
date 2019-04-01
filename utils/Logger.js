// TODO implement real logger with log levels
const GREEN_COLOR = '\x1b[32m';
const RED_COLOR = '\x1b[31m';
const YELLOW_COLOR = '\x1b[33m';
const RESET_COLOR = '\x1b[0m';

const LOGGING_LEVELS = {
  debug: 1,
  info: 2,
  warn: 3,
  warning: 3,
  error: 4,
  fatal: 5
};

let logginLevel = 0;

class Logger {
  constructor (filename) {
    this.filename = filename;
  }

  error (...args) {
    if (logginLevel <= LOGGING_LEVELS.error) {
      // eslint-disable-next-line no-console
      console.error(RED_COLOR, `${this.filename}: `, ...args, RESET_COLOR);
    }
  }

  fatal (...args) {
    // eslint-disable-next-line no-console
    console.error(RED_COLOR, 'FATAL:', `${this.filename}: `, ...args, RESET_COLOR);
  }

  info (...args) {
    if (logginLevel <= LOGGING_LEVELS.info) {
      // eslint-disable-next-line no-console
      console.log(GREEN_COLOR, `${this.filename}: `, ...args, RESET_COLOR);
    }
  }

  debug (...args) {
    if (logginLevel <= LOGGING_LEVELS.debug) {
      // eslint-disable-next-line no-console
      console.log(GREEN_COLOR, `${this.filename}: `, ...args, RESET_COLOR);
    }
  }

  warning (...args) {
    if (logginLevel <= LOGGING_LEVELS.warn) {
      // eslint-disable-next-line no-console
      console.log(YELLOW_COLOR, `${this.filename}: `, ...args, RESET_COLOR);
    }
  }

  warn (...args) {
    this.warning(...args);
  }

  static get logginLevels () {
    return LOGGING_LEVELS;
  }

  static setLevel (level) {
    if (parseInt(level, 10)) {
      logginLevel = level;
    } else {
      logginLevel = LOGGING_LEVELS[level] || 1;
    }
  }
}

module.exports = Logger;
