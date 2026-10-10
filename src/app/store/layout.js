import SideBar from "../components/ui/sidebar/Sidebar";


export const metadata = {
  title: "LitLoop  - Buy or Rent Books",
  description: "An Online Bookstore to Sell and Rest Used Book ",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <SideBar />
        <div className="flex flex-wrap p-2 justify-center w-full">
          {children}
        </div>  
      </div>
  );
}
