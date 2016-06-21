import createLogger from './logger';

export default angular.module('ngRedux.logger', [])
  .factory('ngReduxLogger', createLogger)
  .name;
