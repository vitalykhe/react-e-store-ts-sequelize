import { sortByKey } from "../../utils/sortByKey"
import { arrayRemoveDuplicates } from "../../utils/arrayRemoveDuplicates"

const names = [
  "Gary",
  "Pasan",
  "Gabe",
  "Treasure",
  "Gengis",
  "Gladys",
  "Tony",
  "Gary",
  "Pasan",
  "Gabe",
]

const users = [
  {
    age: 20,
    name: "Blex",
  },
  {
    age: 25,
    name: "Alex",
  },
  {
    age: 30,
    name: "Dlex",
  },
]

const usersSortedByName = [
  {
    age: 25,
    name: "Alex",
  },
  {
    age: 20,
    name: "Blex",
  },
  {
    age: 30,
    name: "Dlex",
  },
]

test("remove duplicates", () => {
  expect(arrayRemoveDuplicates(names)).toStrictEqual([
    "Gary",
    "Pasan",
    "Gabe",
    "Treasure",
    "Gengis",
    "Gladys",
    "Tony",
  ])
})

test("sort", () => {
  expect(sortByKey(users, "name")).toStrictEqual(usersSortedByName)
})

test("sortByAge", () => {
  expect(sortByKey(users, "age")).toStrictEqual(users)
})
