# deno-api

## usage

- run
```shell
deno run -A main.ts
```

- compile
    - `-A`: 全許可
    - `-o`: output先
```shell
deno compile -A -o ./dist/ main.ts
```

- compile(for windows環境)
```shell
deno compile -A --target x86_64-pc-windows-msvc --no-terminal -o ./dist/ main.ts
```
