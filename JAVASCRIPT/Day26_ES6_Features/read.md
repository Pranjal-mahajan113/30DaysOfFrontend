

✅ Map vs Object

Object → keys are only strings/symbols, not guaranteed order.

Map → keys can be any type (string, number, object, boolean, etc.), ordered, faster for frequent additions/removals/lookups.

👉 So:

Use Object when you want a simple structure (like config, JSON-like).

Use Map when you need dynamic key-value pairs with frequent changes.

✅ Set vs Array

Array → allows duplicates, order matters, great for indexed data.

Set → stores only unique values, duplicates are ignored, has faster checks for existence (.has()).

👉 So:

Use Array when duplicates and order matter.

Use Set when you need uniqueness and quick existence checks.

✅ WeakMap & WeakSet

Both hold weak references → keys/values don’t prevent garbage collection.

WeakMap → keys must be objects, values can be anything.

WeakSet → stores only objects, no duplicates.

👉 They are mainly used for memory-efficient storage, like keeping private data related to objects, without stopping them from being garbage-collected.



Map is better than Object when frequent additions/removals are required and when keys aren’t just strings.
Set is better than Array when uniqueness matters.
WeakMap and WeakSet are special cases that allow memory-efficient storage because they don’t prevent garbage collection.”