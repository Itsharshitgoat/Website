async function fetchNowPlaying() {
    const LASTFM_USERNAME = 'Itsharshitgoat';
    const LASTFM_API_KEY = '935f198a44651aeb4a91805de0234b05';   
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
        const track = data.recenttracks.track[0];
        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
        console.log('Is Playing:', isPlaying);
        console.log('Track:', track.name);
    }
}
fetchNowPlaying();