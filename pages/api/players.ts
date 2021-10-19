import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { DateTime } from "luxon";

interface PlayerCountResponse {
    players: number[];
}

export default async function PlayerCountAPI(req: NextApiRequest, res: NextApiResponse) {
    const requestUrl = process.env.HOLYLAND_API_URL + "players";
    const currentTime = Math.floor(DateTime.utc().toSeconds());

    try {
        const response = await axios.get<PlayerCountResponse>(requestUrl + `?${currentTime}`);
        res.json({ meta: { code: 0, message: "OK" }, data: { players: response.data.players.length } });
    } catch (e) {
        console.error(e);
        res.status(500).json({ meta: { code: -1, message: "Internal Server Error" }, data: { players: 0 } });
    }
}
