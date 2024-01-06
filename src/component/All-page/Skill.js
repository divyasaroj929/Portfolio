import React from "react";

const Skill = ({ resizeWidth, data }) => {
  // const { data } = Props;
  // const { resizeWidth } = Props;
  console.log(resizeWidth);
  //   console.log(Props, "skill");
  return (
    <>
      <div className=" box w-[100%] h-auto  bg-gray-300 overflow-hidden   p-9  mb-3 example dark:bg-slate-950 dark:text-white">
        {resizeWidth ? (
          <div className=" text-slate-700 text-3xl font-bold  flex justify-center items-center mb-6 dark:text-slate-100">
            <h1>Skill</h1>
          </div>
        ) : (
          <>
            <div className=" text-slate-700 text-3xl font-bold mb-6 dark:text-slate-100">
              <h1>Skill</h1>
            </div>
          </>
        )}
        <div className="flex justify-center items-center flex-wrap">
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="bg-gray-100 h-[200px] w-[200px] m-3 p-10  flex justify-center
                  hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover
                  "
                >
                  {/* hover:border-teal-500 hover:border-b-20 hover:shadow-2xl
               item-center transition ease-in-out delay-150  
               hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300 */}
                  <img src={item.icon} alt="icon" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
