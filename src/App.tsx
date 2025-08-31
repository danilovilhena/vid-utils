import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";

const App = () => {
  return (
    <main className="flex flex-row min-h-svh min-w-full">
      <Sidebar />
      <div className="flex flex-col items-center justify-center p-4">
        <Button>Click me</Button>
      </div>
    </main>
  );
};

export default App;
