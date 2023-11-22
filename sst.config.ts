import { SSTConfig } from 'sst';
import { Site } from './stacks/FrontendStack';

export default {
    config(_input) {
        return {
            name: 'sst-bz-sample-app',
            region: 'us-east-1',
        };
    },
    stacks(app) {
        app.stack(Site);
    },
} satisfies SSTConfig;
