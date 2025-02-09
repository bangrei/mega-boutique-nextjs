const NewsLetter = () => {
  return (
    <div className="w-full flex flex-col gap-8 bg-primary text-white py-10 px-4 md:px-[7%]">
      <div className="flex flex-col items-center gap-2">
        <div className="uppercase text-3xl font-semibold">
          join our NewsLetter
        </div>
        <span className="font-normal text-center">
          Sign up to be the first to know our new arrivals, special sales and
          more!
        </span>
      </div>
      <div className="w-full flex items-center justify-center max-w-[450px] mx-auto">
        <input
          type="text"
          className="flex-1 p-4 outline-none bg-white text-secondary-super-light border-none"
          placeholder="Email address"
        />
        <button className="outline-none bg-badge p-4 uppercase">
          subscribe
        </button>
      </div>
    </div>
  );
};
export default NewsLetter;
