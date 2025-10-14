import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/Marqu";
import { reviews } from "../constants";
import { div } from "motion/react-client";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "bg-gradient-to-r bg-indigo to-storm relative h-full w-60 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full bg-white/10" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-mediumtext-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {

  return (
    <div className="c-space items-start mt-25 md:mt-35">
        <h2 className="text-heading">Hear from my clients</h2>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-12">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-primary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-primary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
    </div>
  );
}
