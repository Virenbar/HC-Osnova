import data from "../data/data.json" assert { type: "json" };

const turns = data.sort((a, b) => a.turnId > b.turnId ? 1 : -1);

const entrances: Entrance[] = [];

let index = 1;
for (const turn of turns) {
  const floors: Floor[] = [];
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
  entrances.push({
    ID: turn.turnId,
    title: turn.turnTitle,
    flatCount: turn.flatCount,
    floors
  });
}

const getEntrance = (ID: string) => entrances.filter(T => T.ID == ID)[0];
const getFloor = (entrance: string, floor: string) => getEntrance(entrance).floors.filter(F => F.title == floor)[0];

export default function () {
  return {
    entrances,
    getEntrance,
    getFloor
  };
}

interface Entrance {
  ID: string
  title: string
  flatCount: number
  floors: Floor[]
}
interface Floor {
  ID: string
  title: string
  flatCount: number
  flatFirst: number
  flatLast: number
}

