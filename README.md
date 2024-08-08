### Squid Data integrity tester

Checks if the data from two squid instances are the same.

#### Usage

> [!IMPORTANT] 
> You need Deno installed.


1. Load original data to KV store:

> [!IMPORTANT]
> you JSON entities must contain `id` field.

> [!NOTE]
> Code expects file named `load.json`

```bash
deno task load
```
2. Write a sampler function to unify the data

> [!NOTE]
> Tou can find these lines in `main.ts` file L#10-11


```ts
const sampleFn = sampleSample
type Sample = ReturnType<typeof sampleFn>

// Sample function
function sampleSample(item: any) {
  return {
    id: item.id,
    name: item.name,
    // note that fields needs to be in the item
    nft_count: item.nft_count,
    count: item.count,
    equal: item.equal
  }
}
```

3. Check if data is the same

> [!NOTE]
> Code expects file names `test.json`

```bash
deno task start
```

4. Understading the output


> [!NOTE]
> [Diff] Actual / Expected

- Green data (Expected) are from `load.json`
- Red data (Actual) are from `test.json`

```diff
    {
      count: 9,
-     equal: true,
+     equal: false,
      id: "0xb67bedc5e80a7913b92da0a56fc8aba6c1273a6a",
      name: "strigae",
-     nft_count: 9,
+     nft_count: 7,
    }
```