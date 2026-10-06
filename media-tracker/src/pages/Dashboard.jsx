import { media } from "../data/dummyData";
import MediaCard from "../components/MediaCard";
import SideBar from "../components/Sidebar";
import StatCard from "../components/StatCard";
const Dashboard = () => {
  const totalMedia = media.length;
  const favorites = media.filter((item) => item.favorite).length;

  const activeMedia = media.filter(
    (item) =>
      item.status === "watching" ||
      item.status === "playing" ||
      item.status === "reading",
  ).length;

  return (
    <div className="dashboard">
      <SideBar />
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Keep track of your media.</p>
          </div>
          <button className="add-button">+ Add Media</button>
        </header>

        <section className="stats-grid">
          <StatCard label="Total Media" value={totalMedia} icon="📚" />
          <StatCard label="Currently Active" value={activeMedia} icon="📚" />
          <StatCard label="Favorites" value={favorites} icon="❤️" />
        </section>

        <section>
          <h2>Continue</h2>
          <section className="media-grid">
            {media
              .filter((item) => item.status === "completed")
              .map((item) => (
                <MediaCard key={item.id} media={item} />
              ))}
          </section>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
