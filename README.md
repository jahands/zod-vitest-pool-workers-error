# zod-vitest-pool-workers-error

To repro:

Note: Requires pnpm v10+

```sh
pnpm i
pnpm test
```

This results in this error:

```
[vpw:inf] Starting single runtime for vitest.config.ts...
workerd/server/server.c++:3251: error: Fallback service failed to fetch module; exception = (unknown):-1: failed: std::exception: Uncaught JsExceptionThrown
stack: 1016dead3 1016e73e7 1016e7517 100bf8c43 100bd019f 1016e7d8f 100e40173 1016e65eb 101f9bd3f 101f6ad67 101b188bf 1016e6093 100e41837 1011185a7 10111844f; spec = /?specifier=%2FUsers%2Fjh%2Fsrc%2Fzod-vitest-pool-workers-error%2Fnode_modules%2Fzod%2Fdist%2Fv4%2Fclassic%2Findex.js&referrer=%2FUsers%2Fjh%2Fsrc%2Fzod-vitest-pool-workers-error%2Fnode_modules%2Fzod%2Fdist%2Fv4%2Findex.mjs&rawSpecifier=.%2Fclassic%2Findex.js

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/zod.spec.ts [ src/zod.spec.ts ]
Error: No such module "Users/jh/src/zod-vitest-pool-workers-error/node_modules/zod/dist/v4/classic/index.js".
  imported from "Users/jh/src/zod-vitest-pool-workers-error/node_modules/zod/dist/v4/index.mjs"
```
