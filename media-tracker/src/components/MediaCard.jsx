const MediaCard = ({ media }) => {
  return (
    <div className="media-card">
      <div className="media-card-cover">
        {/* <img src={media.path} alt={media.title} /> */}
        <span>{media.type}</span>
      </div>

      <div className="media-card-info">
        <div className="media-card-header">
          <h3>{media.title}</h3>

          {media.favorite && <span>❤️</span>}
        </div>

        <p>{media.status}</p>

        <div className="media-card-footer">
          <span>⭐ {media.rating}</span>
          <span>
            {media.progress}/{media.total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
