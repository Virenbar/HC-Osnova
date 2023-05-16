import data from "../content/data.json" assert { type: "json" };

// 4 и 5 перепутаны
data[2].turnId = "5";
data[4].turnId = "4";
// Лишняя квартира???
data[4].floors[5].flats.pop();

const turns = data.sort((a, b) => a.turnId > b.turnId ? 1 : -1);
const entrances: Entrance[] = [];

let index = 1;
for (const turn of turns) {
  const floors: Floor[] = [];
  const first = index;
  for (const floor of turn.floors.reverse()) {
    const first = index;
    index += floor.flats.length;
    const last = index - 1;
    floors.push({
      ID: floor.id,
      title: floor.title,
      flatCount: floor.flats.length,
      flatFirst: first,
      flatLast: last
    });
  }
  const last = index - 1;
  entrances.push({
    ID: turn.turnId,
    title: turn.turnTitle,
    flatCount: turn.flatCount,
    flatFirst: first,
    flatLast: last,
    floors: floors.reverse()
  });
}

const parkings: Parking[] = [
  {
    ID: "1-1",
    title: "Этаж -1"
  }, {
    ID: "1-2",
    title: "Этаж -2"
  }, {
    ID: "1.2-1",
    title: "Секция 1.2 - Этаж -1"
  }, {
    ID: "1.2-2",
    title: "Секция 1.2 - Этаж -2"
  }, {
    ID: "1.3-2",
    title: "Секция 1.3 - Этаж -2"
  }
];

const getEntrance = (ID: string) => entrances.filter(T => T.ID == ID)[0];
const getFloor = (entrance: string, floor: string) => getEntrance(entrance).floors.filter(F => F.title == floor)[0];
const getParking = (ID: string) => parkings.filter(T => T.ID == ID)[0];

export default function () {
  return {
    entrances,
    parkings,
    getEntrance,
    getFloor,
    getParking
  };
}

interface Entrance {
  ID: string
  title: string
  flatCount: number
  flatFirst: number
  flatLast: number
  floors: Floor[]
}

interface Floor {
  ID: string
  title: string
  flatCount: number
  flatFirst: number
  flatLast: number
}

interface Parking {
  ID: string
  title: string
  note?: string
}
