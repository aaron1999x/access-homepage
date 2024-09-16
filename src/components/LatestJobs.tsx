import Button from './Button';
import JobsSlider from './sliders/JobsSlider';

export default function LatestJobs() {
  return (
    <div className="bg-white pt-8 pb-14 lg:pt-16 lg:pb-20 ">
      <div className="text-center  text-xl md:text-xl font-medium">
        Latest Jobs
      </div>
      <div className="mt-8">
        <JobsSlider />
      </div>
    </div>
  );
}
