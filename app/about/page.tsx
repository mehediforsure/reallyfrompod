import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Immigrant Perspective podcast and its host, Mary Lou Mangan-Lamb.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2E] via-[#1A1F2E]/50 to-transparent" />
        <div className="relative z-10 px-6 pb-12 max-w-6xl mx-auto w-full">
          <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-2 font-medium">
            The Story Behind the Podcast
          </p>
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
          >
            About
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-4xl mx-auto">

          {/* Opening quote */}
          <blockquote
            className="font-display text-[#1A1F2E] text-center mb-16 py-12 border-y border-[#E8E0D4]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "0.01em", lineHeight: "1.2" }}
          >
            &quot;Where are you{" "}
            <em className="text-[#7B9E8B]">really</em>{" "}
            from?&quot;
          </blockquote>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div className="space-y-5 text-[#52576A] leading-relaxed">
              <p>
                For many of us, that&apos;s a loaded question. It can feel like a genuine
                invitation or a subtle reminder that we are &quot;other.&quot;
              </p>
              <p>
                I created <strong className="text-[#1A1F2E]">The Immigrant Perspective</strong> to
                reclaim that question. My own journey began in March of 1986, when I left a tiny
                beach town on the West Coast of Ireland as a ten-year-old passenger on my parents&apos;
                pursuit of the American Dream. We traded the rugged cliffs of County Clare for the
                rolling hills of Southeast Tennessee, and I&apos;ve spent the last 40 years navigating
                the space in between.
              </p>
              <p>
                Even now, I haven&apos;t quite finished &quot;unpacking.&quot; I still feel that visceral pull
                every time the wheels touch the tarmac at Shannon Airport.
              </p>
            </div>

            {/* Photo */}
            <div className="relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/dc2f01f9-7e8c-45fd-a6a6-63d0a1ded6b0/You+who+have+been+born+in+America+-+1.jpeg"
                alt="March 17, 1994: The day the paperwork caught up with my reality."
                className="w-full rounded-sm"
              />
              <p className="mt-3 text-xs text-[#8A8F9E] italic text-center">
                March 17, 1994: The day the paperwork caught up with my reality.
              </p>
            </div>
          </div>

          {/* Second section */}
          <div className="mt-16 space-y-5 text-[#52576A] leading-relaxed">
            <p>
              In my professional life, I&apos;m a data consultant and a business owner, someone trained
              to find patterns in the noise. But in the life that matters most to me, I am a
              daughter, a sister, a wife, and a mother to two teenage sons. To me, those roles are
              the true &quot;data points&quot; of a life well-lived. While work provides the logic, my family
              provides the soul.
            </p>
            <p>
              I&apos;ve realized that I&apos;m not just looking for stories; I&apos;m a seeker looking for the
              common threads that bind everyone who has ever had to redefine the word &quot;home.&quot; I&apos;m
              looking for the moments that make us realize we aren&apos;t just traveling between places —
              we are traveling toward each other.
            </p>
          </div>

          {/* Winding roads image */}
          <div className="mt-14">
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg"
              alt="The winding roads of Arranmore Island"
              className="w-full aspect-video object-cover rounded-sm"
            />
            <p className="mt-3 text-xs text-[#8A8F9E] italic text-center">
              The winding roads of Arranmore Island — a place of family, memory, and home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
