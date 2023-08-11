import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemFromCart = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };

  const reduceQunatiyOfItemByOne = (item) => {
    dispatch(cartActions.reduceQunatiyOfItemByOne(item));
  };

  const addItemToCart = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        price: item.price,
        name: item.name,
        img: item.url,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="h-20 border-b border-[#eaeaea]"></div>
      <div className="container mx-auto pt-20 mb-20">
        <h2 className="text-3xl mb-7">Cart</h2>
        <table className="mb-6 border-x border-b custom:border border-borderColor2 w-full">
          <thead className="hidden custom:table-header-group bg-[#fbfbfb] border border-borderColor2">
            <tr>
              <th className="align-middle text-center"></th>
              <th className="align-middle text-center"></th>
              <th className="text-lg font-semibold px-4 py-3 text-textColor align-middle text-center">
                Product
              </th>
              <th className="text-lg font-semibold px-4 py-3 text-textColor align-middle text-center">
                Price
              </th>
              <th className="text-lg font-semibold px-4 py-3 text-textColor align-middle text-center">
                Quantity
              </th>
              <th className="text-lg font-semibold px-4 py-3 text-textColor align-middle text-center">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="custom:border border-borderColor2">
            {cart.items.map((item) => (
              <tr
                key={item.id}
                className="block custom:table-row custom:border border-borderColor2"
              >
                <td className="border-y border-borderColor2 block custom:table-cell custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center">
                  <button
                    className="mx-auto text-globalcolor2 p-[1px] custom:flex items-center justify-center text-[10px] font-medium w-5 h-5 border border-borderColor2 rounded-[50%] "
                    onClick={() => {
                      removeItemFromCart(item);
                    }}
                  >
                    &#10005;
                  </button>
                </td>
                <td className="border-b border-borderColor2 block custom:table-cell custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center">
                  <img
                    className="max-w-[70px] mx-auto custom:ml-0"
                    src={item.img}
                    alt=""
                  />
                </td>
                <td className="custom:before:hidden before:content-['Product:'] before:text-lg before:float-left before:text-textColor before:font-semibold border-b border-borderColor2 block custom:table-cell custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center text-globalcolor2 font-normal text-lg">
                  {item.name}
                </td>
                <td className="custom:before:hidden before:content-['Price:'] before:text-lg before:float-left before:text-textColor before:font-semibold border-b border-borderColor2 block custom:table-cell text-textColor custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center">
                  ${item.price}
                </td>
                <td className="custom:before:hidden before:content-['Quantity:'] before:text-lg before:float-left before:text-textColor before:font-semibold border-b border-borderColor2 block custom:table-cell custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center">
                  <div className="flex items-center justify-end custom:justify-center">
                    <button
                      className="text-globalcolor2 cursor-pointer border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center"
                      onClick={() => reduceQunatiyOfItemByOne(item)}
                    >
                      -
                    </button>
                    <div className="text-textColor border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center">
                      {item.quantity}
                    </div>
                    <button
                      className="text-globalcolor2 cursor-pointer border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center"
                      onClick={() => addItemToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="custom:before:hidden before:content-['Subtotal:'] before:text-lg before:float-left before:text-textColor before:font-semibold block custom:table-cell text-textColor custom:min-h-[98px] px-4 py-3 align-middle text-right custom:text-center">
                  ${item.totalPrice}
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <td colSpan={6} className="min-h-[98px] px-4 py-3 text-right">
                <div className="flex flex-row items-center justify-center gap-2 mx-auto">
                  <input
                    className="px-3 py-2 border border-borderColor2 max-h-[35px] outline-none"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button className="bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest text-center">
                    APPLY COUPON
                  </button>
                </div>
                <button className="inline-block w-auto bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest text-center">
                  UPDATE CART
                </button>
              </td>
            </tr>
          </tfoot> */}
        </table>
        <div className="flex justify-start">
          <div className="ml-auto w-full border border-borderColor2 custom:w-[48%] px-5">
            <h2 className="bg-[#fbfbfb] font-bold text-xl border-b border-borderColor2 px-5 py-3 mx-[-20px]">
              Cart totals
            </h2>
            <table className="w-full mb-2">
              <tbody>
                <tr className="border-b border-borderColor2">
                  <th className="text-textColor font-normal text-lg min-h-[98px] px-4 py-3 align-middle text-left w-[40%]">
                    Subtotal
                  </th>
                  <td className="text-textColor min-h-[98px] px-4 py-3 align-middle text-left">
                    ${cart.totalPrice}
                  </td>
                </tr>
                <tr className="">
                  <th className="font-normal text-lg border-b border-borderColor2 text-textColor min-h-[98px] px-4 py-3 align-middle text-left w-[40%]">
                    Total
                  </th>
                  <td className="border-b border-borderColor2 text-textColor min-h-[98px] px-4 py-3 align-middle text-left">
                    ${cart.totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="py-4">
              <Link
                to={"/checkout"}
                className=" block bg-globalcolor2 w-full text-white p-4 text-base vsm:text-lg font-normal tracking-[3px] text-center mb-4 hover:bg-globalcolor1 transition-colors duration-300"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
