/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
  Components: join(rootDir, '/src/components'),
  Styles: join(rootDir, '/src/styles'),
  Assets: join(rootDir, '/src/assets')
};
