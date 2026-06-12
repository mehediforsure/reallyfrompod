import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Immigrant Perspective podcast and host Mary Lou Mangan-Lamb — a story that began in 1986 on the West Coast of Ireland.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — BUG FIX: was h-80 with no pt for nav; now min-h with pt-24 */}
      <section className="grain relative min-h-[26rem] flex items-end overflow-hidden" style={{ background: "#12161F" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-[#12161F]/40 to-transparent" />
        <div className="relative z-10 px-6 pb-14 pt-28 max-w-6xl mx-auto w-full">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.2em] mb-3 font-semibold">
            The Story Behind the Podcast
          </p>
          <h1
            className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            About
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-4xl mx-auto">

          {/* Opening blockquote */}
          <div className="py-14 border-y border-[#E8E0D4] text-center mb-16">
            <blockquote
              className="font-display text-[#1A1F2E] leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.005em" }}
            >
              "Where are you{" "}
              <em className="text-[#7B9E8B]">really</em>{" "}
              from?"
            </blockquote>
          </div>

          <div className="grid md:grid-cols-[1fr_360px] gap-12 items-start">
            {/* Text */}
            <div className="space-y-5 text-[#52576A] text-sm leading-relaxed">
              <p>
                For many of us, that's a loaded question. It can feel like a genuine
                invitation or a subtle reminder that we are "other."
              </p>
              <p>
                I created <strong className="text-[#1A1F2E]">The Immigrant Perspective</strong> to
                reclaim that question. My own journey began in March of 1986, when I left a tiny
                beach town on the West Coast of Ireland as a ten-year-old passenger on my parents'
                pursuit of the American Dream. We traded the rugged cliffs of County Clare for the
                rolling hills of Southeast Tennessee, and I've spent the last 40 years navigating
                the space in between.
              </p>
              <p>
                Even now, I haven't quite finished "unpacking." I still feel that visceral pull
                every time the wheels touch the tarmac at Shannon Airport.
              </p>
            </div>

            {/* Photo */}
            <figure>
              <img
                src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/dc2f01f9-7e8c-45fd-a6a6-63d0a1ded6b0/You+who+have+been+born+in+America+-+1.jpeg"
                alt="March 17, 1994 — citizenship ceremony"
                className="w-full"
              />
              <figcaption className="mt-3 text-xs text-[#8A8F9E] italic text-center leading-relaxed">
                March 17, 1994: The day the paperwork caught up with my reality.
              </figcaption>
            </figure>
          </div>

          {/* Divider */}
          <hr className="rule-sage my-16 w-12" />

          {/* Second section */}
          <div className="space-y-5 text-[#52576A] text-sm leading-relaxed">
            <p>
              In my professional life, I'm a data consultant and a business owner — someone trained
              to find patterns in the noise. But in the life that matters most to me, I am a
              daughter, a sister, a wife, and a mother to two teenage sons. Those roles are the true
              "data points" of a life well-lived. While work provides the logic, my family
              provides the soul.
            </p>
            <p>
              I've realized that I'm not just looking for stories; I'm a seeker looking for the
              common threads that bind everyone who has ever had to redefine the word "home." I'm
              looking for the moments that make us realize we aren't just traveling between places —
              we are traveling toward each other.
            </p>
          </div>

          {/* Closing image */}
          <figure className="mt-14">
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg"
              alt="The winding roads of Arranmore Island"
              className="w-full aspect-video object-cover"
            />
            <figcaption className="mt-3 text-xs text-[#8A8F9E] italic text-center">
              The winding roads of Arranmore Island — a place of family, memory, and home.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
