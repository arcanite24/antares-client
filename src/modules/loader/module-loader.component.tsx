import React, { Suspense } from 'react';
import AntaresLoader from '../ui/loader/loader.component';

// const REMOTE_MODULE_URL = 'http://localhost:8080/_dist_/modules/test/index.js';

// const RemoteModule = React.lazy(() => import(REMOTE_MODULE_URL));

// fetch(REMOTE_MODULE_URL).then(console.log)

const ModuleLoader: React.FC = () => {
  return (
    <div>
      <h1>Module Loader</h1>
      <hr />
      <Suspense fallback={<AntaresLoader></AntaresLoader>}>
        {/* <RemoteModule></RemoteModule> */}
      </Suspense>
    </div>
  );
};

export default ModuleLoader;
