import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { baiTapShoe } from "../Store/BaiTapShoe/actions";

const Cart = () => {
  const { cartList,} = useSelector((state) => state.BTshoe);
  let total = 0;
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      id="cart"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
        
          {cartList.length ? (
              <div>
                {cartList.map((cart) => (
                  <div className="row" key={cart.id}>
                    <p style={{display:"none"}}>
                    {total += (cart.price * cart.cartQuantity)}
                    </p>
                    <div className="col-4">
                      <img className="img-fluid" src={cart.image} alt="..." />
                    </div>
                    <div className="col-8">
                      <div
                        className="d-flex justify-content-between"
                        style={{ height: 40 }}
                      >
                        <p className="fw-bold fs-6">{cart.name}</p>
                        <button
                          className="btn btn-danger"
                          onClick={()=>{
                            dispatch(baiTapShoe.handleDeleteCart(cart.id))
                          }}
                        >
                          X
                        </button>
                      </div>
                      <p className="fw-bold">Price: {cart.price}$</p>
                      
                      <div className="d-flex align-items-center">
                        <p className="me-3 fw-bold">Quantity: </p>
                        <button
                          className="btn btn-outline-danger me-2"
                          onClick={()=>{
                            dispatch(baiTapShoe.handleCartQuantity({id: cart.id,
                              quantity:-1}))
                          }}
                        >
                          -
                        </button>
                        <p style={{ paddingTop: 15 }}>{cart.cartQuantity}</p>
                        <button
                          className="btn btn-outline-success ms-2"
                          onClick={()=>{
                            dispatch(baiTapShoe.handleCartQuantity({id: cart.id,
                              quantity:1}))
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className="fw-bold">
                        Total Price: {cart.price * cart.cartQuantity}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h2>Vui lòng chọn sản phẩm</h2>
            )}
            <p className="mt-3 fs-4 text-dark">Tổng tiền: {total}$</p>
            
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              
            >
              Close
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
