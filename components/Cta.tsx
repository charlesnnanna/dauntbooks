import Image from 'next/image';
import SectionHeader from '@components/SectionHeader.tsx';
import Button from '@components/Button';

export default function Cta(): JSX.Element {
  // REDUX
  // const counter = useSelector((state) => state.counter)

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto md:py-[20px] py-[60px] lg:px-[10vw] px-[3vw]">
        <div className="bg-indigo-700 rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-10">
            <div className="lg:self-center flex flex-col gap-6">
              <SectionHeader title="Get Book Copy Today!" style="text-white" />
              <p className="text-sm text-white/80 leading-relaxed">
                This the first true value generator on the Internet. It uses
                alphas dictionary of over 200 Latin words.
              </p>
              <Button style="border border-secondary" />
            </div>
          </div>
          <div className="h-[200px] sm:h-[300px] sm:w-[500px] relative mx-auto">
            <Image src="images/teacup.svg" layout="fill" alt="teacup" />
          </div>
        </div>
      </div>
    </div>
  );
}
