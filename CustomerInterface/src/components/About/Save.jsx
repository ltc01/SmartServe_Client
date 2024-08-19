// import TextContent from "../TextContent.jsx";
export function TextContent(props) {
    return (
      <div className="w-full lg:w-[50%]">
        <div className="md:w-[100%] w-[80%] h-[38rem] flex justify-center mx-auto items-center flex-col text-center">
          <h1
            className={`font-bold ${props.textColor} md:w-[32rem] text-5xl md:text-6xl`}
          >
            {props.head}
          </h1>
          <p
            className={`text-xl leading-6 md:w-[60%] my-6 px-5 ${props.textColor}`}
          >
            {props.desc}
          </p>
          <button
            className={`${props.btnBg} ${props.btnText} font-bold py-3 px-4 text-sm rounded-full m-1`}
          >
            Explore
          </button>
        </div>
      </div>
    );
  }
export const Save = () => {
  return (
    <div id="save" className="bg-[#c3efef] flex-col md:flex-row w-full flex">
      <TextContent
        head="Save Your Favorites!"
        desc="Bookmark dishes you love to revisit later and discover more flavors that delight your taste buds."
        textColor="text-teal-800"
        btnText="text-[#c3efef]"
        btnBg="bg-teal-800"
      />
      <div className="md:w-[50%] hidden lg:block w-full py-8">
        <div className="h-[38rem] relative">
          <div className="absolute md:top-1 -top-40 right-2">
            <img
              src="https://media.gettyimages.com/id/1438016630/photo/medium-overhead-shot-of-families-sharing-dinner-at-outdoor-restaurant.jpg?s=612x612&w=gi&k=20&c=xf2riYkf-miHooKcMR-RRKaYPdI9vNFo1xfKv0fLS_c="
              alt={`image1`}
              className=" w-[13rem] rounded-[2.5rem] h-[14rem] object-cover"
            />
            <h1 className="text-yellow-300 font-bold absolute top-10 text-2xl left-3">
              Discover the Taste of Tradition
            </h1>
          </div>

          <div className="absolute md:top-64 top-[26rem] right-10 md:right-20">
            <img
              src="https://media.gettyimages.com/id/556561965/photo/woman-having-food-at-restaurant-table.jpg?s=612x612&w=gi&k=20&c=6W5g32ykgTgByme_TEP2EFxrM9NSVeL1_bmZQe-f1U0="
              alt={`image1`}
              className=" w-[9rem] rounded-[2rem] h-[8rem] object-cover"
            />
            <h1 className="text-amber-300 font-bold absolute top-4 text-xl left-4">
              Delight Your Senses
            </h1>
          </div>

          <div className="absolute md:top-[24rem] top-40 right-1 md:right-16 w-[10rem] h-[12rem] bg-[url('https://media.gettyimages.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=2048x2048&w=gi&k=20&c=zZJH5ryj274c_3y0eecKQ-7GBf6wnedvWevidFtaC18=')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
            <div className="relative w-full rounded-[3rem] h-full bg-black/30">
              <div className="absolute bottom-7 left-3">
                <h1 className="text-lime-300 font-bold text-2xl">
                  Enjoy Fine Dining
                </h1>
              </div>
            </div>
          </div>

          <div className=" absolute md:top-[23rem] left-3 bottom-36 md:bottom-0 w-[12rem] h-[12rem] md:left-40 bg-[url('https://media.gettyimages.com/id/1081422898/photo/pan-fried-duck.jpg?s=2048x2048&w=gi&k=20&c=vGF_hp35UYlhhzNN1oNYb68xZxLb6AZc3PaHnmKssh4=')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
            <div className="relative w-full rounded-[3rem] h-full bg-black/40">
              <div className="absolute top-6 left-4">
                <h1 className="text-emerald-300 font-bold text-2xl">
                  Savor Deliciousness
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute w-[16rem] h-[16rem] md:w-[22rem] md:h-[20rem] bg-[url('https://media.gettyimages.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=gi&k=20&c=MVcagVTGWtQKWS7w6OwjxJMH8RUkMr7SFwyWYHfAKSQ=')] bg-center bg-cover bg-no-repeat rounded-[3rem] ">
            <div className=" md:w-full  rounded-[3rem] h-full bg-black/30">
              <div className="relative w-[80%] md:w-full md:top-16 top-12">
                <h1 className="text-green-300 font-bold text-2xl md:text-6xl text-center">
                  Where Every Meal Tells a Story
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};