const Cards = () => {
  const data = [
    "Personal Nutrients",
    "Tasty Meals",
    "Weekly Health Checks",
    "Domestic  Delivery",
  ];
  return (
    <>
      <div className="card flex mt-2 pt-3">
        <div className="flex justify-between text-center">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center ">
              <img
                className="w-10 h-10"
                src={`images/people-time.png`}
                alt={"Personal Nutrients"}
              />
              <p className="text-[13px]">Personal Nutrients</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-10 h-10"
                src={`images/meal.png`}
                alt={"Tasty Meals"}
              />
              <p className="text-[13px]">Tasty Meals</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center justify-center ">
              <img
                className="w-10 h-10"
                src={`images/health-check.png`}
                alt={"Weekly Health Checks"}
              />
              <p className="text-[13px]">Weekly Health Checks</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center justify-center ">
              <img
                className="w-10 h-10  "
                src={`images/delivery.png`}
                alt={"delivery"}
              />
              <p className="text-[13px]">Domestic Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
