import Card from "@/components/Card";
import CardYoutubeFollow from "@/components/CardYoutubeFollow";
import CardTiktokFollow from "@/components/CardTiktokFollow";
import CardDiscordMember from "@/components/CardDiscordMember";
import CardTwitchFollow from "@/components/CardTwitchFollow";
import CardAllViews from "@/components/CardAllViews";

export default function Home() {
  return (
    <div className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr min-h-screen">
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <CardYoutubeFollow/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <CardTiktokFollow/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <CardTwitchFollow/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <CardDiscordMember/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg col-span-2 h-full text-white">
        <CardAllViews/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <Card/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <Card/>
      </div>
      <div className="bg-gray-700 shadow-lg p-4 rounded-lg h-full text-white">
        <Card/>
      </div>
    </div>
  );
}
