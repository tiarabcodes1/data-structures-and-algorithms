# Implementation: Hash Tables

Through the creation of a `HashTable class` and a `LinkedList class` with accompanying *methods*, the ability to find **key-value pairs** through the passing of a key is possible. This approach to data search is considered to have `O(n) time` efficiency because of the amount of speed provided through the ability to skip cycling through each index in an array that could rage in the upper thousands. 

Below explains the usage of each method that allows you to add to a HashTable, providing your table size upon instantiation. The `hash` function allows for a key to receive a unique index that can be used when storing and searching in a HashTable.

# API

| Method         | Argument         | Functionality                                                                                                     |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------------|
| set()   | key, value                | This method should hash the key, and set the key and value pair in the table, handling collisions as needed.                                      |
| get()     |  key            | Returns value associated with that key in the table.           |
| contains()       |  key            | Returns boolean, indicating if the key exists in the table already.                           |
|  keys()     | n/a              | Returns a collection of keys |
| hash()       | keys        | Returns an index in the collection for that key                                                    |

