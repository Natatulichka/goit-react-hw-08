import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { changefilter } from "../../redux/filter/slice";

function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  const handleChange = (evt) => {
    dispatch(changefilter(evt.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <h2>Find contacts</h2>
      <label htmlFor="search" className={css.label}>
        Enter name or number
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={handleChange}
        className={css.input}
        placeholder="Search contacts by Name"
      />
    </div>
  );
}
export default SearchBox;
