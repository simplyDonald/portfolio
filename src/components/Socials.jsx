import { socials } from "techStack";


const Socials = () => {
 
  return (
    <div className="hidden fixed bottom-0 lg:block left-4  text-[#8892B0] stroke2">
      {socials.map((item) => {
        return (
          <li key={item.name} className=" invert w-5 py-2 list-none">
            <a href="">
              <img src={item.img} alt="" />
            </a>
          </li>
        );
      })}
    </div>
  );
}
 
export default Socials;