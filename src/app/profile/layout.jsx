
import Aside from "../component/Aside";

export default function RootLayout({ children }) {
  return (
    
      
            <div className="border border-white flex gap-5 max-w-[1250px] m-auto">
              
                <main> {children}</main>
                <div><Aside/></div>
            
            </div>
    
  )
}