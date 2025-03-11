const SpotifyPlayer: React.FC = () => {
    return (
      <div style={{ backgroundColor: "black", width: "100%", display: "flex", justifyContent: "center" }}>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/5JZEJNr4jH2JrBcf419P3L?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default SpotifyPlayer;
  