import Head from "next/head";
import Navbar from "./Navbar";
import link from "next/dist/client/link";

const Layout = props => (
  <div>
    <Head>
      <title>BitPrize</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);
export default Layout;
