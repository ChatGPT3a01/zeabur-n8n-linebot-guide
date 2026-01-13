import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
// import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import Part1 from "@/pages/Part1";
import Part2 from "@/pages/Part2";
import Part3 from "@/pages/Part3";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/part/1" component={Part1} />
        <Route path="/part/2" component={Part2} />
        <Route path="/part/3" component={Part3} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
