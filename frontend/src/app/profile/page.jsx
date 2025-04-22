import ProfileCard from "../../components/profile/ProfileCard";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
export default function ProfilePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F3F4F6] py-8 px-4">
      <ProfileCard />
    </div>
    <div className="mt-[-10%]"><Footer/></div>
    
    </>
  );
}
