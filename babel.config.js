module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "components": "./components",
                        "atom": "./components/atom",
                        "molecule": "./components/molecule",
                        "organism": "./components/organism",
                        "hooks": "./hooks",
                        "assets": "./assets",
                        "api": "./api",
                        "constants": "./constants",
                    },
                },
            ],
            'babel-plugin-styled-components',
            require.resolve("expo-router/babel"),
        ],
    };
};
