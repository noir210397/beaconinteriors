import Image from "next/image";
import image from "../../public/images/loading.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[20000] bg-secondary flex justify-center items-center">
      <Image alt="loading" src={image} className="animate-spin" />
    </div>
  );
};

export default Loading;
