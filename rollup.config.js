import { resolve } from "@rollup/plugin-node-resolve";
import { image } from "@rollup/plugin-image";
import { serve } from "rollup-plugin-serve";
import { alias } from "rollup-plugin-alias";
import { commonjs } from "@rollup/plugin-commonjs";

export default {
    input: "./script.js",
    output: [
        {
            format: "esm",
            file: "./bundle.js",
        },
        {
            format: "cjs",
            file: "./bundle.cjs",
        },
    ],
    plugins: [
        resolve({
            moduleDirectories: ["node_modules"],
            dedupe: ["three"],
            extensions: [".js"],
        }),
        alias({
            entries: [
                {
                    find: "three/src/math/MathUtils",
                    replacement: "three/src/math/MathUtils.js",
                },
            ],
        }),
        alias({ rxjs: __dirname + "/node_modules/rxjs" }),
        commonjs(),
        image(),
        serve(),
    ],
};
