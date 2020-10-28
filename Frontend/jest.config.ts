// jest.config.js
module.exports = {
    // [...]
    globals: {
        'ts-jest': {
            babelConfig: {
                comments: false,
                plugins: ['@babel/plugin-transform-react-jsx']
            }
        }
    }
};