import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppLogger extends Logger {
  // protected className: string;
  constructor(name: string, options?: { timestamp: true }) {
    super(name, options);
    // this.className = name;
  }

  // getClassName(): string {
  //   const currentDate = new Date();
  //   const datetime: string =
  //     currentDate.getDate() +
  //     '/' +
  //     (currentDate.getMonth() + 1) +
  //     '/' +
  //     currentDate.getFullYear() +
  //     ' ' +
  //     currentDate.getHours() +
  //     ':' +
  //     currentDate.getMinutes() +
  //     ':' +
  //     currentDate.getSeconds();
  //   return datetime + ' | ' + this.className;
  // }
  //
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    super.log(message, optionalParams);
  }
  //
  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {
    super.fatal(message, optionalParams);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    super.error(message, optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    super.warn(message, optionalParams);
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]) {
    super.debug(message, optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]) {
    // super.verbose(message, optionalParams);
  }
}
