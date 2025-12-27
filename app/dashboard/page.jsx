import { redirect } from "next/navigation";

const isLoggedIn = true; // 🔴 later auth se replace hoga

export default function DashboardPage() {
  if (!isLoggedIn) {
    redirect("/");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>Dashboard route is working 🚀</p>
    </>
  );
}
