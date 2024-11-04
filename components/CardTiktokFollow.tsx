import { FaTiktok } from 'react-icons/fa';

export default function CardTiktokFollow() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-black rounded-full p-6 flex items-center justify-center mb-4">
        <FaTiktok className="text-white text-5xl"/>
      </div>
      <span className="text-white text-3xl font-semibold">44</span>
      <p className="text-gray-400">Followers</p>
      <p className="text-gray-500 text-sm">116 Likes</p>
    </div>
  );
}
