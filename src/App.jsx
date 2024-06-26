import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Category from "./pages/Category";

import AppLayout from "./components/ui/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

import { QueryClient, QueryClientProvider } from "react-query";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import CartDetails from "./features/cart/CartDetails";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<CartDetails />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="products/category/:category" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
