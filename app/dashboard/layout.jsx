export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <a href="/dashboard">Dashboard</a> |{" "}
        <a href="/dashboard/projects">Projects</a> |{" "}
        <a href="/dashboard/settings">Settings</a>
      </nav>

      <main>{children}</main>
    </section>
  );
}
