/**redux 核心管理对象模块 */
import { createStore, applyMiddleware } from 'redux';
// For delayed actions, including working with promises. 处理异步
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

/**向外暴露store对象 */
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
