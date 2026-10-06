import { navigationItems } from "../data/navigation";

const Sidebar = () => {
  const mainItems = navigationItems.filter((item) => item.section === "main");

  const libraryItems = navigationItems.filter(
    (item) => item.section === "library",
  );

  const otherItems = navigationItems.filter((item) => item.section === "other");
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">M</div>
        <h2>Media Tracker</h2>
      </div>

      <nav className="sidebar-nav">
        <SidebarSection title="MAIN" items={mainItems} />
        <SidebarSection title="LIBRARY" items={libraryItems} />
        <SidebarSection title="OTHER" items={otherItems} />
      </nav>

      <div className="sidebar-bottom">
        <a href="/settings">⚙ Settings</a>
      </div>
    </aside>
  );
};

const SidebarSection = ({ title, items }) => {
  return (
    <div className="sidebar-section">
      <span className="sidebar-section-title">{title}</span>

      {items.map((item) => (
        <a key={item.id} href={item.path} className="sidebar-link">
          <span>{item.icon}</span>
          {item.label}
        </a>
      ))}
    </div>
  );
};
export default Sidebar;
