import { BellIcon, BookmarkSlashIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Page() {
    return (
      <>
        <div id="main" className="flex flex-row h-screen bg-black text-white  divide-x-2 space-x-2 ">  
            <div className="rounded p-10 flex-col h-full w-1/4">
              
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><HomeIcon className="w-6 mr-5"/><p className="hidden xl:block">Home</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><MagnifyingGlassIcon className="w-6 mr-5"/><p className="hidden xl:block">Explore</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><BellIcon className="w-6 mr-5"/><p className="hidden xl:block">Notifications</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><EnvelopeIcon className="w-6 mr-5"/><p className="hidden xl:block">Messages</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4"href={""}><BookmarkSlashIcon className="w-6 mr-5"/><p className="hidden xl:block">Grok</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><UsersIcon className="w-6 mr-5"/><p className="hidden xl:block">Communities</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><UserIcon className="w-6 mr-5"/><p className="hidden xl:block">Profile</p></Link>
              <Link className="flex sm:p-3 sm:ml-9 mt-4" href={""}><EllipsisHorizontalCircleIcon className="w-6 mr-5"/><p className="hidden xl:block">More</p></Link>
              <button className="flex btn btn-blue w-3/4 ml-5"><p className="mx-auto my-auto">Post</p></button>
              <div className="h-24"></div>
              <button className="flex btn btn-black w-full">
                <div className="my-auto">
                  <img src="https://www.istockphoto.com/photo/getting-ready-for-finals-gm1474998532-504631783?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3A%3A"/>
                </div>
               <div className="ml-6">
                  <p><b>Toheeb</b></p>
                  <p>@_Toheeb</p>
               </div>
               <div className="mt-2">
                  <EllipsisHorizontalIcon className="w-1/4 float-right"></EllipsisHorizontalIcon>
               </div>
              </button>
          
            </div>  
            <div className="rounded h-12 w-2/4 h-full"> 
                TailWind CSS Flex-Grow 
            </div>  
            <div className="rounded w-1/4 h-full ">Side Part</div> 
        </div> 
      </>
    );
  }