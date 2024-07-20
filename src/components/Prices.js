import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="Pizza Margherita" />
              </div>
              <h1 className="price__heading">Pizza Margherita</h1>
              <p className="price__text">
                A classic delight with fresh tomatoes, mozzarella cheese, and a touch of basil.
              </p>
              <p className="price_rs">Rp 750,000</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="Pizza Pepperoni" />
              </div>
              <h1 className="price__heading">Pizza Pepperoni</h1>
              <p className="price__text">
                Loaded with pepperoni slices, this pizza is perfect for meat lovers.
              </p>
              <p className="price_rs">Rp 375,000</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="Pizza Supreme" />
              </div>
              <h1 className="price__heading">Pizza Supreme</h1>
              <p className="price__text">
                Topped with a variety of vegetables, meats, and cheeses for the ultimate pizza
                experience.
              </p>
              <p className="price_rs">Rp 2,250,000</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="Pizza Hawaiian" />
              </div>
              <h1 className="price__heading">Pizza Hawaiian</h1>
              <p className="price__text">A sweet and savory combination of ham and pineapple.</p>
              <p className="price_rs">Rp 330,000</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="Pizza Veggie" />
              </div>
              <h1 className="price__heading">Pizza Veggie</h1>
              <p className="price__text">A delightful mix of fresh vegetables on a crispy crust.</p>
              <p className="price_rs">Rp 330,000</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="Pizza BBQ Chicken" />
              </div>
              <h1 className="price__heading">Pizza BBQ Chicken</h1>
              <p className="price__text">
                Tender chicken pieces, BBQ sauce, and a mix of cheeses for a smoky flavor.
              </p>
              <p className="price_rs">Rp 330,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
