import SideNav from '@/app/ui/homepage/sidenav';
import { BellIcon, BookmarkSlashIcon, EllipsisHorizontalCircleIcon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
        <div id="main" className="flex flex-row h-full bg-black text-white ">  
            <div className="rounded p-10 flex-col h-full w-1/4">
              
              <Link className="flex p-3" href={""}><HomeIcon className="w-6 mr-5"/><p>Home</p></Link>
              <Link className="flex p-3" href={""}><MagnifyingGlassIcon className="w-6 mr-5"/><p>Explore</p></Link>
              <Link className="flex p-3" href={""}><BellIcon className="w-6 mr-5"/><p>Notifications</p></Link>
              <Link className="flex p-3" href={""}><EnvelopeIcon className="w-6 mr-5"/><p>Messages</p></Link>
              <Link className="flex p-3" href={""}><BookmarkSlashIcon className="w-6 mr-5"/><p>Grok</p></Link>
              <Link className="flex p-3" href={""}><UsersIcon className="w-6 mr-5"/><p>Communities</p></Link>
              <Link className="flex p-3" href={""}><UserIcon className="w-6 mr-5"/><p>Profile</p></Link>
              <Link className="flex p-3" href={""}><EllipsisHorizontalCircleIcon className="w-6 mr-5"/><p>More</p></Link>
              <button className="flex btn btn-blue w-full"><p className="mx-auto">Post</p></button>
              <div className="h-24"></div>
              <button className="flex btn btn-black w-full">
                <div className="my-auto">
                  <img src="https://www.istockphoto.com/photo/getting-ready-for-finals-gm1474998532-504631783?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3A%3A"/>
                </div>
               <div className="ml-6">
                  <p><b>Toheeb</b></p>
                  <p>@_Toheeb</p>
                </div>
              </button>
          
            </div>  
            {/* <div className="rounded h-12 w-2/4 h-full"> 
                TailWind CSS Flex-Grow 
            </div>  
            <div className="rounded w-1/4 h-full ">Side Part</div>  */}
        </div> 
  );
}


{/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}
      
      </div> */}
// <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* <div className="w-full flex-none md:w-64">
        <SideNav />
      </div> */}
      
    // </div>