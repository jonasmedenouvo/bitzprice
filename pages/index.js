import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
const Index = props => (
  <Layout>
    <div>{props.bpi.time.updated}</div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  return {
    bpi: data
  };
};
export default Index;
