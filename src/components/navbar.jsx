import { useSelector } from "react-redux";

export const Navbar = () => {
  const account = useSelector((state) => state.auth.account);
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div>
            <a className="navbar-brand" href="#">
              <img
                src="https://academy.techready.id/wp-content/uploads/2022/04/cropped-5-1.png"
                alt=""
                width="110"
                height="24"
              />
            </a>
          </div>
          <div className="d-flex">
            <form className="d-flex mx-2">
              {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
              {/* <button className="btn btn-outline-secondary" type="submit">
                Search
              </button> */}
            </form>
            <button className="btn btn-secondary">
              {account?.name || "Unauthenticate"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
