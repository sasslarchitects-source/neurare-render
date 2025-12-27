import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          padding: "20px",
          background: "#111",
          color: "#fff",
        }}
      >
        <h2>Dashboard</h2>
        <nav style={{ marginTop: "20px" }}>
          <p><Link href="/dashboard">Home</Link></p>
          <p><Link href="/dashboard/projects">Projects</Link></p>
          <p><Link href="/dashboard/settings">Settings</Link></p>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ padding: "30px", flex: 1 }}>
        {children}
      </main>
    </div>
  );
}
