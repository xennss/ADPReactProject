const items = [
  { "id": 0, "name": "Mary Jackson", "email": "maryj@abc.com", "password": "maryj" },
  { "id": 1, "name": "Karen Addams", "email": "karena@abc.com", "password": "karena" },
  { "id": 2, "name": "Scott Ramsey", "email": "scottr@abc.com", "password": "scottr" },
  { "id": 3, "name": "John Doe", "email": "john.doe@example.com", "password": "john123" },
  { "id": 4, "name": "Jane Smith", "email": "jane.smith@example.com", "password": "jane123" },
  { "id": 5, "name": "Alice Johnson", "email": "alice.j@example.com", "password": "alice123" },
  { "id": 6, "name": "Bob Brown", "email": "bob.brown@example.com", "password": "bob123" },
  { "id": 7, "name": "Charlie White", "email": "charlie.w@example.com", "password": "charlie123" },
  { "id": 8, "name": "David Black", "email": "david.b@example.com", "password": "david123" },
  { "id": 9, "name": "Eva Green", "email": "eva.g@example.com", "password": "eva123" },
  { "id": 10, "name": "Frank Blue", "email": "frank.b@example.com", "password": "frank123" },
  { "id": 11, "name": "Grace Gold", "email": "grace.g@example.com", "password": "grace123" },
  { "id": 12, "name": "Hank Silver", "email": "hank.s@example.com", "password": "hank123" },
  { "id": 13, "name": "Ivy Violet", "email": "ivy.v@example.com", "password": "ivy123" },
  { "id": 14, "name": "Jack Red", "email": "jack.r@example.com", "password": "jack123" },
  { "id": 15, "name": "Karen Rose", "email": "karen.r@example.com", "password": "karen123" },
  { "id": 16, "name": "Leo Gray", "email": "leo.g@example.com", "password": "leo123" },
  { "id": 17, "name": "Mia Pink", "email": "mia.p@example.com", "password": "mia123" },
  { "id": 18, "name": "Nora Black", "email": "nora.b@example.com", "password": "nora123" },
  { "id": 19, "name": "Owen White", "email": "owen.w@example.com", "password": "owen123" },
  { "id": 20, "name": "Paula Orange", "email": "paula.o@example.com", "password": "paula123" },
  { "id": 21, "name": "Quinn Indigo", "email": "quinn.i@example.com", "password": "quinn123" },
  { "id": 22, "name": "Rita Cyan", "email": "rita.c@example.com", "password": "rita123" },
  { "id": 23, "name": "Steve Maroon", "email": "steve.m@example.com", "password": "steve123" },
  { "id": 24, "name": "Tina Aqua", "email": "tina.a@example.com", "password": "tina123" },
  { "id": 25, "name": "Ursula Mint", "email": "ursula.m@example.com", "password": "ursula123" },
  { "id": 26, "name": "Victor Olive", "email": "victor.o@example.com", "password": "victor123" },
  { "id": 27, "name": "Wendy Coral", "email": "wendy.c@example.com", "password": "wendy123" },
  { "id": 28, "name": "Xander Peach", "email": "xander.p@example.com", "password": "xander123" },
  { "id": 29, "name": "Yara Lavender", "email": "yara.l@example.com", "password": "yara123" },
  { "id": 30, "name": "Zane Tan", "email": "zane.t@example.com", "password": "zane123" },
  { "id": 31, "name": "Aaron Beige", "email": "aaron.b@example.com", "password": "aaron123" },
  { "id": 32, "name": "Bella Teal", "email": "bella.t@example.com", "password": "bella123" },
  { "id": 33, "name": "Charlie Cyan", "email": "charlie.c@example.com", "password": "charlie123" },
  { "id": 34, "name": "Daniel Salmon", "email": "daniel.s@example.com", "password": "daniel123" },
  { "id": 35, "name": "Elena Charcoal", "email": "elena.c@example.com", "password": "elena123" },
  { "id": 36, "name": "Fiona Maroon", "email": "fiona.m@example.com", "password": "fiona123" },
  { "id": 37, "name": "George Mint", "email": "george.m@example.com", "password": "george123" },
  { "id": 38, "name": "Hannah Olive", "email": "hannah.o@example.com", "password": "hannah123" },
  { "id": 39, "name": "Isaac Aqua", "email": "isaac.a@example.com", "password": "isaac123" },
  { "id": 40, "name": "Jackie Plum", "email": "jackie.p@example.com", "password": "jackie123" },
  { "id": 41, "name": "Kyle Gold", "email": "kyle.g@example.com", "password": "kyle123" },
  { "id": 42, "name": "Laura Lilac", "email": "laura.l@example.com", "password": "laura123" },
  { "id": 43, "name": "Michael Gray", "email": "michael.g@example.com", "password": "michael123" },
  { "id": 44, "name": "Nina Cherry", "email": "nina.c@example.com", "password": "nina123" },
  { "id": 45, "name": "Oscar Almond", "email": "oscar.a@example.com", "password": "oscar123" },
  { "id": 46, "name": "Pamela Rose", "email": "pamela.r@example.com", "password": "pamela123" },
  { "id": 47, "name": "Quincy Berry", "email": "quincy.b@example.com", "password": "quincy123" },
  { "id": 48, "name": "Rachel Kiwi", "email": "rachel.k@example.com", "password": "rachel123" },
  { "id": 49, "name": "Samuel Blackberry", "email": "samuel.b@example.com", "password": "samuel123" },
  { "id": 50, "name": "Tina Grapefruit", "email": "tina.g@example.com", "password": "tina123" },
  { "id": 51, "name": "Ulysses Mango", "email": "ulysses.m@example.com", "password": "ulysses123" },
  { "id": 52, "name": "Valerie Cantaloupe", "email": "valerie.c@example.com", "password": "valerie123" },
  { "id": 53, "name": "Walter Papaya", "email": "walter.p@example.com", "password": "walter123" },
  { "id": 54, "name": "Xena Passionfruit", "email": "xena.p@example.com", "password": "xena123" },
  { "id": 55, "name": "Yvonne Persimmon", "email": "yvonne.p@example.com", "password": "yvonne123" },
  { "id": 56, "name": "Zara Figs", "email": "zara.f@example.com", "password": "zara123" },
  { "id": 57, "name": "Albert Fig", "email": "albert.f@example.com", "password": "albert123" },
  { "id": 58, "name": "Betty Grape", "email": "betty.g@example.com", "password": "betty123" },
  { "id": 59, "name": "Charlie Watermelon", "email": "charlie.w@example.com", "password": "charlie123" },
  { "id": 60, "name": "Diana Coconut", "email": "diana.c@example.com", "password": "diana123" },
  { "id": 61, "name": "Edward Pomegranate", "email": "edward.p@example.com", "password": "edward123" },
  { "id": 62, "name": "Fiona Lychee", "email": "fiona.l@example.com", "password": "fiona123" },
  { "id": 63, "name": "George Mulberry", "email": "george.m@example.com", "password": "george123" },
  { "id": 64, "name": "Holly Kumquat", "email": "holly.k@example.com", "password": "holly123" },
  { "id": 65, "name": "Ian Jackfruit", "email": "ian.j@example.com", "password": "ian123" },
  { "id": 66, "name": "Julia Dragonfruit", "email": "julia.d@example.com", "password": "julia123" },
  { "id": 67, "name": "Kevin Tamarind", "email": "kevin.t@example.com", "password": "kevin123" },
  { "id": 68, "name": "Luna Sapote", "email": "luna.s@example.com", "password": "luna123" },
  { "id": 69, "name": "Mason Rambutan", "email": "mason.r@example.com", "password": "mason123" },
  { "id": 70, "name": "Nina Durian", "email": "nina.d@example.com", "password": "nina123" },
  { "id": 71, "name": "Owen Salak", "email": "owen.s@example.com", "password": "owen123" },
  { "id": 72, "name": "Paige Dragonfruit", "email": "paige.d@example.com", "password": "paige123" },
  { "id": 73, "name": "Quinn Langsat", "email": "quinn.l@example.com", "password": "quinn123" },
  { "id": 74, "name": "Riley Mangosteen", "email": "riley.m@example.com", "password": "riley123" },
  { "id": 75, "name": "Samantha Nance", "email": "samantha.n@example.com", "password": "samantha123" },
  { "id": 76, "name": "Travis Bilimbi", "email": "travis.b@example.com", "password": "travis123" },
  { "id": 77, "name": "Uma Jabuticaba", "email": "uma.j@example.com", "password": "uma123" },
  { "id": 78, "name": "Victor Mangaba", "email": "victor.m@example.com", "password": "victor123" },
  { "id": 79, "name": "Wanda Gac", "email": "wanda.g@example.com", "password": "wanda123" },
  { "id": 80, "name": "Xander Rambai", "email": "xander.r@example.com", "password": "xander123" },
  { "id": 81, "name": "Yasmine Passionfruit", "email": "yasmine.p@example.com", "password": "yasmine123" },
  { "id": 82, "name": "Zachary Carambola", "email": "zachary.c@example.com", "password": "zachary123" },
  { "id": 83, "name": "Amy Olive", "email": "amy.o@example.com", "password": "amy123" },
  { "id": 84, "name": "Brian Kiwi", "email": "brian.k@example.com", "password": "brian123" },
  { "id": 85, "name": "Catherine Pear", "email": "catherine.p@example.com", "password": "catherine123" },
  { "id": 86, "name": "Daniel Persimmon", "email": "daniel.p@example.com", "password": "daniel123" },
  { "id": 87, "name": "Emily Quince", "email": "emily.q@example.com", "password": "emily123" },
  { "id": 88, "name": "Felix Medlar", "email": "felix.m@example.com", "password": "felix123" },
  { "id": 89, "name": "Grace Cherry", "email": "grace.c@example.com", "password": "grace123" },
  { "id": 90, "name": "Henry Blackcurrant", "email": "henry.b@example.com", "password": "henry123" },
  { "id": 91, "name": "Isabella Huckleberry", "email": "isabella.h@example.com", "password": "isabella123" },
  { "id": 92, "name": "Jack Lemon", "email": "jack.l@example.com", "password": "jack123" },
  { "id": 93, "name": "Kathy Lime", "email": "kathy.l@example.com", "password": "kathy123" },
  { "id": 94, "name": "Leo Fig", "email": "leo.f@example.com", "password": "leo123" },
  { "id": 95, "name": "Mona Medlar", "email": "mona.m@example.com", "password": "mona123" },
  { "id": 96, "name": "Nathan Quince", "email": "nathan.q@example.com", "password": "nathan123" },
  { "id": 97, "name": "Olivia Salak", "email": "olivia.s@example.com", "password": "olivia123" },
  { "id": 98, "name": "Paul Mulberry", "email": "paul.m@example.com", "password": "paul123" },
  { "id": 99, "name": "Quinn Blackberry", "email": "quinn.b@example.com", "password": "quinn123" }
]


export function getAll(){
    return items;
}

export function get(id) {
    let result = null;
    for( let item of items){
        if(item.id === id){
            result = item;
        }
    }
  return result;
}

export function deleteById(id) {
  let arrayIndex = getArrayIndexForId(id);
  if( arrayIndex >= 0 && arrayIndex < items.length){
    items.splice(arrayIndex,1);
  }
}

export function post(item) {
  let nextid = getNextId();
  item.id = nextid;
  items[items.length] = item;
}

export function put(id, item) {
  for( let i = 0; i < items.length; i++){
    if(items[i].id === id){
      items[i] = item;
      return;
    }
  }
}

function getArrayIndexForId(id){
  for( let i = 0; i < items.length; i++){
    if(items[i].id === id){
      return i;
    }
  }
  return -1;  
}


function getNextId(){
  let maxid = 0;
  for( let item of items){
    maxid = (item.id > maxid)?item.id:maxid;
  }  
  return maxid + 1;
}


