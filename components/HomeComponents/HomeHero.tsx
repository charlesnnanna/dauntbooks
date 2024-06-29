import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="flex md:flex-row flex-col border-0 my-20 px-[3vw] lg:px-[10vw] gap-[20px]">
      {/* Hero description */}
      <div className="border-0 lg:self-center py-2 my-2">
        <div className="border-0 flex flex-row gap-2">
          <Image src="/images/line.svg" alt="Line" width={30} height={30} />
          <span className="italic">Welcome to Page</span>
        </div>
        <h1 className="text-6xl font-bold py-4  min-w-[200px] max-w-[600px]">
          Books are uniquely portable magic
        </h1>
        <p className="max-w-[500px] min-w-[200px] my-2 py-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>

        <div className="flex flex-row text-md font-bold gap-6 my-6">
          <button className="border-0 bg-secondary text-primary py-2 w-[150px]">
            Order Today
          </button>
          <button className="border-b self-center">Read Free Demo</button>
        </div>

        <div className="my-6">
          <ul className="border-0 flex flex-row justify-start flex-wrap lg:gap-20 gap-10 font-bold text-xs md:text-md list-none">
            <li className="flex flex-row gap-2">
              <Image
                className="self-start pt-2"
                src="/images/bulletpoint.svg"
                alt="bulletpoint"
                width={15}
                height={15}
              />
              <p>
                Pages: <br />
                <span className="font-normal text-xs md:text-sm">586Pages</span>
              </p>
            </li>

            <li className="flex flex-row gap-2">
              <Image
                className="self-start pt-2"
                src="/images/bulletpoint.svg"
                alt="bulletpoint"
                width={15}
                height={15}
              />
              <p>
                Lenght: <br />
                <span className="font-normal text-xs md:text-sm">10hours</span>
              </p>
            </li>

            <li className="flex flex-row gap-2">
              <Image
                className="self-start pt-2"
                src="/images/bulletpoint.svg"
                alt="bulletpoint"
                width={15}
                height={15}
              />
              <p>
                Ratings: <br />
                <span className="font-normal text-xs md:text-sm">
                  4.5/5 (305 ratings)
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Image */}
      <div>
        <Image src="/images/Book.svg" alt="book" width={500} height={100} />
      </div>
    </div>
  );
}
