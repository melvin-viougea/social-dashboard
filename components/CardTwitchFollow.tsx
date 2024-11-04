import { FaTwitch } from 'react-icons/fa';

export default function CardTwitchFollow() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-purple-600 rounded-full p-6 flex items-center justify-center mb-4">
        <FaTwitch className="text-white text-5xl"/>
      </div>
      <span className="text-white text-3xl font-semibold">83</span>
      <p className="text-gray-400">Followers</p>
      <p className="text-gray-500 text-sm">2 Subs</p>
    </div>
  );
}
