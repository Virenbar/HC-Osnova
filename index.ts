import fs from "node:fs";
import { fetch } from "undici";
import data from "./content/data.json" assert { type: "json" };

for (const turn of data) {
    const turn_dir = `turns/${turn.turnTitle}`;
    ensureExists(turn_dir);
    for (const floor of turn.floors) {
        saveFile(floor.img, `${turn_dir}/${floor.title}.svg`);

        const floor_dir = `${turn_dir}/flats/${floor.title}`;
        ensureExists(floor_dir);
        for (const flat of floor.flats) {
            saveFile(flat.img, `${floor_dir}/${flat.number}.svg`);
        }
    }
}

function ensureExists(path: string) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

async function saveFile(url: string, path: string) {
    const response = await fetch(`https://osnova-house.ru${url}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(path, Buffer.from(buffer));
}
