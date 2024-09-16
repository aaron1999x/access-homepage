import Button from './Button';
import workForUsImage from '../assets/work.jpg';

export default function WorkForUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 bg-primary py-4 px-8 flex flex-col gap-4 justify-center items-center">
        <h3 className="text-xl text-white ">Work For Us</h3>
        <p className="text-xs md:text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi
          delectus consectetur reprehenderit quibusdam error architecto veniam
          excepturi quos. Impedit maxime nihil mollitia quibusdam rerum dolor
          laudantium qui eveniet illo.
        </p>
        <Button
          text="learn more"
          className="bg-white !lowercase"
          type="button"
        />
      </div>
      <div className="col-span-1 h-[250px] hidden md:block">
        <img
          src={workForUsImage}
          className="w-full h-full object-cover"
          alt="Work for us"
        />
      </div>
    </div>
  );
}
