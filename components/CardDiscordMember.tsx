import { FaDiscord } from 'react-icons/fa';

export default function CardDiscordMember() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-indigo-500 rounded-full p-6 flex items-center justify-center mb-4">
        <FaDiscord className="text-white text-5xl"/>
      </div>
      <span className="text-white text-3xl font-semibold">43</span>
      <p className="text-gray-400">Members</p>
    </div>
  );
}
