import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "@/assets/Gemini_Generated_Image_r1hd4wr1hd4wr1hd.jpeg";

function LandingPage() {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#1abc9c] to-[#16a085] py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Effortless Car Wash and Detailing
            </h1>
            <p className="text-lg text-white/90 max-w-md">
              Experience the ultimate in car care with our convenient mobile
              service. Book now and let us bring the spa treatment to your
              doorstep.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#16a085] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Book Now
            </Link>
          </div>
          <div className="w-full max-w-md">
            <img
              src={HeroImg}
              width="400"
              height="400"
              alt="Car Wash"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span className="text-gray-700">Cleany</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We provide top-notch services to meet all your needs. Experience the
            difference with Cleany.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/cwb"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
              >
                Book Service Now
              </Link>
            </div>
          </div>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="tel:+212634691864"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
              >
                <Phone
                  size={20}
                  fill="white"
                  strokeWidth={0}
                  style={{ marginRight: "5px" }}
                />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container px-4 md:px-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-primary rounded-xl overflow-hidden relative hero-left-content">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10" />
              <div className="relative z-20 p-6 md:p-8 lg:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  Car Wash Service
                </h2>
                <p className="text-primary-foreground">
                  Get your car sparkling clean with our professional car wash
                  service. Book now and enjoy a hassle-free experience.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="bg-secondary rounded-xl overflow-hidden relative hero-right-content">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 z-10" />
              <div className="relative z-20 p-6 md:p-8 lg:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
                  House Cleaning Service
                </h2>
                <p className="text-secondary-foreground">
                  Enjoy a spotless home with our professional house cleaning
                  service. Book now and let us take care of the chores.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-secondary-foreground px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
