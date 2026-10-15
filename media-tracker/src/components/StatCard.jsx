const StatCard = ({ label, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <h3>
          {icon}
          {label}
        </h3>
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
