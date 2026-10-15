import { navigationItems } from "../data/navigation";

function Sidebar() {
  const mainItems = navigationItems.filter((item) => item.section === "main");

  const libraryItems = navigationItems.filter(
    (item) => item.section === "library",
  );

  const otherItems = navigationItems.filter((item) => item.section === "other");

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">M</div>

        <div>
          <h2>
            Media<span>Hub</span>
          </h2>
        </div>
      </div>

      <nav className="sidebar-nav">
        <SidebarSection title="MENU" items={mainItems} activePath="/" />
        <SidebarSection title="YOUR LIBRARY" items={libraryItems} />
        <SidebarSection title="PERSONAL" items={otherItems} />
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-profile">
          <div className="profile-avatar">M</div>
          <div className="profile-info">
            <strong>My Library</strong>
            <span>Personal collection</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarSection({ title, items, activePath }) {
  return (
    <div className="sidebar-section">
      <span className="sidebar-section-title">{title}</span>

      {items.map((item) => (
        <a
          key={item.id}
          href={item.path}
          className={`sidebar-link ${item.path === activePath ? "active" : ""}`}
        >
          <span className="sidebar-link-icon">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
