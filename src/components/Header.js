import { useSelector, useDispatch } from "react-redux";
import { changeNumber, changeInclude } from "../redux/paraghraphSlice";

export const Header = () => {
  const number = useSelector((state) => state.paraghraph.number);
  const include = useSelector((state) => state.paraghraph.include);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-5">React Sample Text Generator App</h1>
      </div>
      <div className="row justify-content-around">
        <div className="col">
          <label htmlFor="numberinput">Paraghraps</label>
          <input
            id="numberinput"
            type="number"
            min="1"
            max="20"
            className="form-control"
            value={number}
            onChange={(e) => dispatch(changeNumber(e.target.value))}
          />
        </div>
        <div className="col">
          <label htmlFor="include">Include HTML?</label>
          <select
            name="include"
            id="include"
            className="form-select"
            value={include}
            onChange={(e) => dispatch(changeInclude(e.target.value))}
          >
            <option value="html">Yes</option>
            <option value="text">No</option>
          </select>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};
