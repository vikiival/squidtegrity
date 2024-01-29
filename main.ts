const PATH = './db.sqlite'
const ENTITY = 'collection'
const FILE = 'collection.json'
import { assertEquals } from "assert/mod.ts";

const db = await Deno.openKv(PATH);


const file = await Deno.readTextFile(FILE).then(JSON.parse);

let count = 0

for (const item of file) {
  const key: Deno.KvKey = [
    ENTITY,
    item.id
  ]
  const entity = await db.get(key)
  const actual = sampleCollection(item)
  const expected = sampleCollection(entity.value)
  try {
    assertEquals(actual, expected)  
  } catch (error) {
    count++;
    console.log(actual.id)
    console.log('----------------')
    console.log(error.message)
  }
}

if (count) {
  console.log(`[TEST] ${count} tests failed`)
} else {
  console.log(`[TEST] All tests passed`)
}

// attibutes needs to be unhexed

function sampleCollection(item: any) {
  return {
    id: item.id,
    // name: item.name,
    block_number: item.block_number,
    burned: item.burned,
    current_owner: item.current_owner,
    distribution: item.distribution,
    floor: item.floor, // floor is not the same 
    hash: item.hash,
    highest_sale: item.highest_sale,
    // image: item.image,
    issuer: item.issuer,
    max: item.max,
    // media: item.media,
    // metadata: item.metadata,
    nft_count: item.nft_count,
    owner_count: item.owner_count,
    supply: item.supply,
    updated_at: item.updated_at,
    volume: item.volume,
    // meta_id: item.meta_id,
    // version: item.version,
    recipient: item.recipient,
    royalty: item.royalty
  }
}



// wall streeet is missing royalty?