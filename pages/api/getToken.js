export default async function handler(req, res) {
  const authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
  };

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    authParams
  );

  const token = await response.json();

  res.status(200).json(token.access_token);
}
