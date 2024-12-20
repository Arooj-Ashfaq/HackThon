import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6">
            <img
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
              alt="Web Development"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
                Our Dream is
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Global Learning Transformation
              </p>
              <p className="mt-4 text-lg text-justify text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.Quis tellus eget adipiscing
                convallis sit sit eget aliquet quis. Suspendisse eget egestas a
                elementum pulvinar et feugiat blandit at. In mi viverra elit
                nunc.
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-800 sm:text-2xl text-center">
            Benefits to Enroll:
          </h1>
          <div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            onClick={() => handleClick()}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-16 bg-slate-100 rounded-3xl p-6 cursor-pointer hover:bg-slate-200"
                >
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-gray-800">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
