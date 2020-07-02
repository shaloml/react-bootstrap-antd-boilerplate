import __ from 'lodash';

/**
 * You can extend Lodash with mixins
 * And use it as below
 * import _ from '@lodash'
 */
const _ = __.runInContext();

_.mixin({
  setIn: (state, name, value) => _.setWith(_.clone(state), name, value, _.clone)
});

export default _;
