const {withModuleFederation} = require('@nx/angular/module-federation');
const moduleFederationConfig = require('./module-federation.config');
const { merge } = require('webpack-merge');


const someConfig = {
    module: {
        rules: [
            {
                test: /config\.json$/i,
                type: 'asset/resource',
                generator: {
                    filename:  'assets/config.json'
                }
            }
        ]
    }
};

module.exports = withModuleFederation(moduleFederationConfig).then(
    (mfeFactory) => {
        return (config) => {
            return merge(
                someConfig,
                mfeFactory(config)
            );
        }
    }
);