import ProfileCard from "../../components/profile/ProfileCard";
import SecondNavbar from "../../components/secondnavbar/page";
import Footer from "../../components/footer/page";
export default function ProfilePage() {
  return (
    <>
    <SecondNavbar />
    <div className="min-h-screen bg-[#F3F4F6] py-8 px-4">
      <ProfileCard />
    </div>
    <div className="mt-[0%]"><Footer/></div>

    
    </>
  );
}
