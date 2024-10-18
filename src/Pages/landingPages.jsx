import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Buttons from "@/components/ui/Buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTheme } from "@/contexts/themeContext";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import companiesLight from "../data/companiesLight.json";
import faq from "../data/faq.json";

const LandingPages = () => {
  const { themeMode } = useTheme();
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center dark:gradientTitleDark gradientTitleLight text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center justify-center gap-2 lg:gap-6">
            and get
            {themeMode === "dark" ? (
              <img
                src="/logo.png"
                className="h-14 sm:h-24 lg:h-32"
                alt="hiredlogo"
              />
            ) : (
              <img
                src="/logo-dark.png"
                className="h-14 sm:h-24 lg:h-32"
                alt="hiredlogo"
              />
            )}
          </span>
        </h1>
        <p className="dark:text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobslisting"}>
          <Buttons className={`p-2  bg-blue-600 text-xl text-white`}>
            Find Jobs
          </Buttons>
        </Link>
        <Link to={`/postjobs`}>
          <Buttons className={`p-2 bg-green-600 text-xl text-white`}>
            Post a Job
          </Buttons>
        </Link>
      </div>
      {
        /* carousel */
        themeMode === "dark" ? (
          <Carousel
            className="w-full py-10"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className={`flex gap-5 lg:gap-20 items-center`}>
              {companies.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className={`h-9 sm:h-14 object-contain`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          /* carousel */
          <Carousel
            className="w-full py-10"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className={`flex gap-5 lg:gap-20 items-center`}>
              {companiesLight.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className={`h-9 sm:h-14 object-contain`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )
      }
      <img src="/banner.jpeg" alt="" className="w-full" />
      {/* banner */}
      <section className={`grid grid-cols-1 lg:grid-cols-2 gap-2`}>
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post Jobs, manage applications and find the best candidate
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => (
          <AccordionItem value={`item+ ${index + 1}`} key={index}>
            <AccordionTrigger className={`font-bold text-xl leading-10`}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className={`font-semibold text-blue-500`}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPages;
