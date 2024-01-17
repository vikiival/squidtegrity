const PATH = './db.sqlite'
const ENTITY = 'collection'
const FILE = 'col.json'

const db = await Deno.openKv(PATH);

const file = await Deno.readTextFile(FILE).then(JSON.parse);

for (const item of file) {
  const key: Deno.KvKey = [
    ENTITY,
    item.id
  ]
  await db.set(key, item)
}
