import { useSelector, useDispatch } from "react-redux";
import { changeNumber, changeInclude } from "../redux/paraghraphSlice";

export const Header = () => {
  const number = useSelector((state) => state.paraghraph.number);
  const include = useSelector((state) => state.paraghraph.include);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Sample Text Generator App</h1>
      <label htmlFor="numberinput">Paraghraps</label>
      <input
        id="numberinput"
        type="number"
        value={number}
        onChange={(e) => dispatch(changeNumber(e.target.value))}
      />
      <label htmlFor="include">Include HTML?</label>
      <select
        name="include"
        id="include"
        value={include}
        onChange={(e) => dispatch(changeInclude(e.target.value))}
      >
        <option value="html">Yes</option>
        <option value="text">No</option>
      </select>
      <br />
      <hr />
    </div>
  );
};
