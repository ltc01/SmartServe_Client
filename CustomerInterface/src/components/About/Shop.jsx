import { TextContent } from "./Save";

TextContent

export const Shop = () => {
  return (
    <div
      id="shop"
      className="z-0 bg-[#ffe2eb] w-full flex-col lg:flex-row flex"
    >
      <div className="md:w-[50%] hidden lg:block h-[38rem] w-full">
        <div className="w-full h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1679503585940-cc88aaf39e09?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`image1`}
            className=" w-full h-full object-cover object-top max-sm:object-top"
          />
        </div>
      </div>
      <TextContent
        head="Explore More!!"
        desc="Find new culinary experiences and fresh menu inspirations waiting for you."
        textColor="text-red-700"
        btnText="text-[#ffe2eb]"
        btnBg="bg-red-700"
      />
    </div>
  );
};