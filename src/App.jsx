import { RouterProvider, useRouter } from './router/Router.jsx';
import { matchRoute } from './router/routes.js';
import { Layout } from './components/layout/Layout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { LecturersPage } from './pages/LecturersPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { PartnersPage } from './pages/PartnersPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { ContactsPage } from './pages/ContactsPage.jsx';



function Page() {
  const { path } = useRouter();
  const route = matchRoute(path);

  switch (route.page) {
    case 'home': return <HomePage />;
    case 'lecturers': return <LecturersPage />;
    case 'about': return <AboutPage />;
    case 'partners': return <PartnersPage />;
    case 'contacts': return <ContactsPage />;
    default: return <NotFoundPage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <Page />
      </Layout>
    </RouterProvider>
  );
}