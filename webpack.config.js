const path = require('path');

const src = path.resolve() + '/src';

module.exports = [
    {
        name: 'js',
        entry: {
            main: {
                import: `${src}/main.js`,
                dependOn: 'vendor',
            },
            vendor: `${src}/vendor.js`,
        },
        output: {
            path: path.resolve() + '/dist',
            filename: '[name].js',
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        chunks: 'all',
                    }
                }
            }
        }
    },
];