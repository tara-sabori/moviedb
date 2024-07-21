import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";

const DarkMode = () => {
    const {theme,changeTheme}=useContext(ThemeContext);
    return (
        <div className="form-check form-switch mt-4 p-0 col-12 col-md-3">
            <input
                className="form-check-input ms-4 me-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={changeTheme}
                checked={theme=='dark'?true:false}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">dark mode</label>
        </div>
    );
}

export default DarkMode;
