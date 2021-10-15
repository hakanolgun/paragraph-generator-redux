import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeParas } from "../redux/paraghraphSlice";

export const Body = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.paraghraph.number);
  const include = useSelector((state) => state.paraghraph.include);
  const paras = useSelector((state) => state.paraghraph.paras);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler&paras=${number}&format=${include}`
      );
      let data = (await res.text()) || (await res.json());
      dispatch(changeParas(data));
    }
    fetchData();
  }, [number, include, dispatch]);

  return <div className="container">{paras}</div>;
};
