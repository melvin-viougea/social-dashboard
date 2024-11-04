import { FaYoutube } from 'react-icons/fa';

export default function CardYoutubeFollow() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-red-600 rounded-full p-6 flex items-center justify-center mb-4">
        <FaYoutube className="text-white text-5xl"/>
      </div>
      <span className="text-white text-3xl font-semibold">13</span>
      <p className="text-gray-400">Followers</p>
    </div>
  );
}
