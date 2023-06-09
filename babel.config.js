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
                        "hooks": "./hooks"
                    },
                },
            ],
            require.resolve("expo-router/babel"),
        ],
    };
};
