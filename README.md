### Squid Data integrity tester

Checks if the data from two squid instances are the same.

#### Usage

> [!IMPORTANT] 
> You need Deno installed.

Load original data to KV store:

> [!NOTE]
> Code expects file named `load.json`

```bash
deno task load
```

Check if data is the same:

> [!NOTE]
> Code expects file names `test.json`

```bash
deno task start
```