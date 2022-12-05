const path = require('path');

const src = path.resolve() + '/src';
const env = process.env.NODE_ENV;

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
        module: {
            rules: [
                {
                    test: /\.m?jsx?$/,
                    exclude: new RegExp(`node_modules`),
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3', modules: 'commonjs' }],
                        ],
                        comments: false,
                        cacheDirectory: (env !== 'production'),
                    },
                },
            ],
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