import React from 'react';

import { AppContextInterface } from '../../utils/types';

const ComicContext = React.createContext<AppContextInterface | null>(null);

export { ComicContext };
