import requireAuth from "../../hoc/requireAuth";

function ProfilePage() {
  return <div>Profile page</div>;
}

export default requireAuth(ProfilePage);
