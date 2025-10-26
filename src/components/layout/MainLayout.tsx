import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
