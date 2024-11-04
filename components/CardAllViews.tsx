import {FaTiktok, FaYoutube} from "react-icons/fa";

export default function CardAllViews() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-gray-400 text-2xl">Total Views Short Video</h2>
      <span className="text-white text-3xl font-semibold">9810</span>
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center space-y-1">
          <div className="bg-red-600 rounded-full p-4">
            <FaYoutube className="text-white text-3xl"/>
          </div>
          <span className="text-white text-2xl font-semibold">3507</span>
          <p className="text-gray-400">Youtube</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="bg-black rounded-full p-4">
            <FaTiktok className="text-white text-3xl"/>
          </div>
          <span className="text-white text-2xl font-semibold">6303</span>
          <p className="text-gray-400">TikTok</p>
        </div>
      </div>
    </div>
  );
}
