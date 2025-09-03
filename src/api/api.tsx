import axios from "axios";

export async function getChampion() {
  const response = await axios.get(
    `https://ddragon.leagueoflegends.com/cdn/15.16.1/data/en_US/champion/Aatrox.json`
  );
  console.log(response.data);
  return response.data;
}

export async function getChampions() {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/15.16.1/data/en_US/champion.json"
    );
    console.log("console da api", response.data.data);
    return response.data.data;
  } catch (err) {
    throw err;
  }
}
export async function getItems() {
  const response = await axios.get(
    `https://ddragon.leagueoflegends.com/cdn/15.16.1/data/en_US/item.json`
  );
  return response.data;
}
