
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../../components/Account/AccuntSingleCard";
import OrderDetailsTop from "../../components/OrderDetails/OrderDetailsTop/OrderDetailsTop";
import OrderDetailsBottom from "../../components/OrderDetails/OrderDetailsBottom/OrderDetailsBottom";
import ReturnOrdermain from "../../components/ReturnOrderDetails/ReturnOrderMain/ReturnOrdermain";
import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

// https://i.ibb.co/WzDxXQY/visa.png
// https://i.ibb.co/D8M3MPP/a-express.png

const orderHistory = [
  {
    id: 1,
    image: "https://i.ibb.co/WzDxXQY/visa.png",
    method: "American Express",
    defaultValue: true,
    lastFour: "0022",
    expires: "01/22",
  },
  {
    id: 2,
    image: "https://i.ibb.co/D8M3MPP/a-express.png",
    method: "Visa Card",
    defaultValue: false,
    lastFour: "0022",
    expires: "01/22",
  },
];

function ReturnDetails() {
  return (
    <>
      {/* <Layout title={"Return Details"}> */}
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />

          {/* <!-- account content --> */}
          <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
            {/* <!-- single card --> */}
            <ReturnOrdermain />
            {/* <!-- single card end --> */}
          </div>
          {/* <!-- account content end --> */}
        </div>
      {/* </Layout> */}
    </>
  );
}

export default withAuth(ReturnDetails);
