import createLogger from './logger';

export default angular.module('ngRedux.logger', [])
  .provider('ngReduxLogger', function() {
    return {
      $get: function(){},
      createLogger: createLogger
    };
  })
  .name;
