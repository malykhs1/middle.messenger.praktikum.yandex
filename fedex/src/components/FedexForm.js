import React from "react";

export const FedexForm = () => {
  return (
    <>
    <div className="fedex-form__container">
      <form className="fedex-form">
        <input className="fedex-form__input"
          type="text"
          placeholder="Name"
          id="filmSearch"
        />

<input className="fedex-form__input"
          type="text"
          placeholder="Surname"
          id="filmSearch"
        />

<input className="fedex-form__input"
          type="text"
          placeholder="Telefon"
          id="filmSearch"
        />
      </form>
      </div>

    </>
  )
}