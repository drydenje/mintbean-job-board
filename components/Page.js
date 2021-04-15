import PropTypes from "prop-types";
import Header from "../components/Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      <h2>I am the page component</h2>
      <div>{children}</div>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
