interface SectionHead {
  topheader: string;
  bottomheader?: string;
}
const SectionHeaders = ({ topheader, bottomheader }: SectionHead) => {
  return (
    <div className="flex justify-center items-center flex-col py-2 uppercase lg:lowercase">
      {/* <div className="w-[50%]"> */}
      <div className="lg:translate-x-4 lg:text-3xl text-2xl font-bold  ">
        {topheader}
      </div>
      <div className="text-center lg:text-3xl text-2xl font-medium font-mono ">
        {bottomheader}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SectionHeaders;
