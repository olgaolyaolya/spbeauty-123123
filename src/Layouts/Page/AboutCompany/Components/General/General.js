import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
function General() {
  return (
    <div className="col d-inline-flex flex-column mt-4 me-4 mb-4">
      <Profile /> {/* Фото компании, название, тип и адрес */}
      <Preferences /> {/* Инпуты, где можно поменять название, тип и адрес */}
    </div>
  );
}

export default General;