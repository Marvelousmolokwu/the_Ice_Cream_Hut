const Order = ({ iceCream }) => {
  return (
    <>
      <section className="h-screen flex  items-center flex-col lg:max-w-[90%] mx-auto    bg-iceCream3  bg-contain bg-no-repeat ">
        <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl mt-[20vh]">
          Thank you for your Order! :)
        </h2>
        <p className="text-lg sm:text-2xl">
          you ordered a {iceCream.base} flavored iceCream with
          {iceCream.topping.map((topping) => (
            <div key={topping}>{topping} topping</div>
          ))}
        </p>
      </section>
    </>
  );
};

export default Order;
