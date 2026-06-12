import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

import Home from "@/pages/home";
import Websites from "@/pages/websites";
import Branding from "@/pages/branding";
import AIContent from "@/pages/ai-content";
import Chatbots from "@/pages/chatbots";
import SocialMedia from "@/pages/social-media";
import Coding from "@/pages/coding";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/websites" component={Websites} />
          <Route path="/branding" component={Branding} />
          <Route path="/ai-content" component={AIContent} />
          <Route path="/chatbots" component={Chatbots} />
          <Route path="/social-media" component={SocialMedia} />
          <Route path="/coding" component={Coding} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;