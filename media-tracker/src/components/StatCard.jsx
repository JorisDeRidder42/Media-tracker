const StatCard = ({ label, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
