import {
  PencilIcon,
  GlobeAltIcon,
  BoltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import SectionHeader from '@components/SectionHeader';
import Chapter from '@components/HomeComponents/Chapter';

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: PencilIcon,
  },
];

export default function Chapters(): JSX.Element {
  return (
    <div className="py-12 bg-neutral border border-black text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader style="items-center" title="The Chapter Includes" />

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 ">
            {features.map((feature, index) => (
              <Chapter key={index} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
