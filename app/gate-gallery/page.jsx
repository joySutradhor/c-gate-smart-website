"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Plus,
  Minus,
} from "lucide-react";

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "Metal Gate",
  "Wooden Gate",
  "Rallings",
  "Other Metal Work",
];

// ============================================================
// GALLERY DATA
// ============================================================

const galleryItems = [
  // ==========================================================
  // METAL GATE — metal1.jpg to metal55.jpg
  // ==========================================================

  ...Array.from({ length: 55 }, (_, index) => ({
    id: index + 1,
    category: "Metal Gate",
    image: `/gallery/metal${index + 1}.jpg`,
    title: `Metal Gate `,
  })),

  // ==========================================================
  // WOODEN GATE — wood1.jpg to wood17.jpg
  // ==========================================================

  ...Array.from({ length: 17 }, (_, index) => ({
    id: 56 + index,
    category: "Wooden Gate",
    image: `/gallery/wood/wood${index + 1}.jpg`,
    title: `Wooden Gate `,
  })),

  // ==========================================================
  // RAILINGS — rallings.jpg to rallings43.jpg
  // ==========================================================

  ...Array.from({ length: 43 }, (_, index) => ({
    id: 73 + index,
    category: "Rallings",
    image: `/gallery/rallings/railings${index + 1}.jpg`,
    title: `Railing `,
  })),

  // ==========================================================
  // OTHER METAL WORK — other1.jpg to other40.jpg
  // ==========================================================

  ...Array.from({ length: 24 }, (_, index) => ({
    id: 116 + index,
    category: "Other Metal Work",
    image: `/gallery/other/other${index + 1}.jpg`,
    title: `Other Metal Work`,
  })),
];

// ============================================================
// BENTO CLASS GENERATOR
// ============================================================

const getBentoClasses = (index) => {
  const desktopPattern = index % 8;
  const mobilePattern = index % 4;

  let desktopClass = "";
  let mobileClass = "";

  // ----------------------------------------------------------
  // MOBILE BENTO
  //
  // 2 columns
  //
  // 0 = 2x2 BIG
  // 1 = 1x1
  // 2 = 1x1
  // 3 = 2x1 WIDE
  //
  // This creates a complete 2-column block without empty gaps.
  // ----------------------------------------------------------

  switch (mobilePattern) {
    case 0:
      mobileClass = "col-span-2 row-span-2";
      break;

    case 1:
      mobileClass = "col-span-1 row-span-1";
      break;

    case 2:
      mobileClass = "col-span-1 row-span-1";
      break;

    case 3:
      mobileClass = "col-span-2 row-span-1";
      break;

    default:
      mobileClass = "col-span-1 row-span-1";
  }

  // ----------------------------------------------------------
  // DESKTOP BENTO
  //
  // 4 columns
  //
  // 0 = 2x2 BIG
  // 1 = 1x1
  // 2 = 1x1
  // 3 = 2x1 WIDE
  // 4 = 1x2 TALL
  // 5 = 2x1 WIDE
  // 6 = 1x2 TALL
  // 7 = 2x1 WIDE
  //
  // With grid-flow-dense this creates a tight Bento layout.
  // ----------------------------------------------------------

  switch (desktopPattern) {
    case 0:
      desktopClass = "lg:col-span-2 lg:row-span-2";
      break;

    case 1:
      desktopClass = "lg:col-span-1 lg:row-span-1";
      break;

    case 2:
      desktopClass = "lg:col-span-1 lg:row-span-1";
      break;

    case 3:
      desktopClass = "lg:col-span-2 lg:row-span-1";
      break;

    case 4:
      desktopClass = "lg:col-span-1 lg:row-span-2";
      break;

    case 5:
      desktopClass = "lg:col-span-2 lg:row-span-1";
      break;

    case 6:
      desktopClass = "lg:col-span-1 lg:row-span-2";
      break;

    case 7:
      desktopClass = "lg:col-span-2 lg:row-span-1";
      break;

    default:
      desktopClass = "lg:col-span-1 lg:row-span-1";
  }

  return `${mobileClass} ${desktopClass}`;
};

// ============================================================
// MAIN GALLERY COMPONENT
// ============================================================

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Metal Gate");

  const [selectedImage, setSelectedImage] = useState(null);

  const [showAll, setShowAll] = useState(false);

  // ==========================================================
  // FILTER IMAGES
  // ==========================================================

  const filteredImages = galleryItems.filter(
    (item) => item.category === activeCategory,
  );

  // ==========================================================
  // SHOW 8 OR ALL
  // ==========================================================

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  // ==========================================================
  // CURRENT LIGHTBOX INDEX
  // ==========================================================

  const currentIndex = selectedImage
    ? filteredImages.findIndex((item) => item.id === selectedImage.id)
    : -1;

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const goToNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const goToPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  // ==========================================================
  // LOCK BODY SCROLL WHEN LIGHTBOX OPEN
  // ==========================================================

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // ==========================================================
  // CATEGORY CHANGE
  // ==========================================================

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
    setShowAll(false);
  };

  return (
    <main className="bg-[#F8FAFC]">

      
      {/* ======================================================
          HERO SECTION
      ======================================================= */}

      <section className="relative overflow-hidden bg-white">
        {/* Background Decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#EAF0F5]
            opacity-70
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-20
            h-72
            w-72
            rounded-full
            bg-[#EAF0F5]
            opacity-50
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            lg:px-10
            lg:py-16
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E4E9EE]
                bg-[#F8FAFC]
                px-4
                py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#415A77]
                "
              />

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#667085]
                "
              >
                Our Gallery
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-[30px]
                font-semibold
                leading-[1.15]
                tracking-[-0.025em]
                text-[#182433]
                sm:text-[36px]
                lg:text-[48px]
              "
            >
              Craftsmanship You Can
              <span
                className="
                  block
                  text-[#415A77]
                "
              >
                See for Yourself
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-[15px]
                leading-7
                text-[#667085]
                sm:text-[16px]
              "
            >
              Explore our collection of bespoke gates, railings and specialist
              metalwork. Every project is carefully designed and crafted with
              attention to detail, quality and lasting performance.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          GALLERY SECTION
      ======================================================= */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* ====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-4
            lg:mb-9
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#415A77]
              "
            >
              Explore Our Work
            </span>

            <h2
              className="
                mt-2
                text-[28px]
                font-semibold
                tracking-[-0.02em]
                text-[#182433]
                sm:text-[32px]
              "
            >
              Our Latest Projects
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-[14px]
              leading-6
              text-[#667085]
              lg:text-right
            "
          >
            Browse our work by category and click any project to view it in full
            detail.
          </p>
        </div>

        {/* ====================================================
            CATEGORY TABS
        ===================================================== */}

        <div
          className="
            mb-8
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          <div
            className="
              flex
              min-w-max
              gap-1.5
              rounded-2xl
              border
              border-[#E4E9EE]
              bg-white
              p-1.5
            "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    rounded-xl
                    px-4
                    py-2.5
                    text-[13px]
                    font-medium
                    transition-all
                    duration-300
                    sm:px-5
                    sm:py-3
                    sm:text-[14px]
                    cursor-pointer

                    ${
                      isActive
                        ? "bg-[#415A77] text-white shadow-sm"
                        : "text-[#667085] hover:bg-[#F8FAFC] hover:text-[#182433]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            BENTO GALLERY
        ===================================================== */}

        <div
          key={activeCategory}
          className="
            grid
            grid-cols-2

            auto-rows-[145px]

            gap-[10px]

            grid-flow-dense

            sm:auto-rows-[170px]

            lg:grid-cols-4
            lg:auto-rows-[175px]

            xl:auto-rows-[190px]
            
          "
        >
          {visibleImages.map((item, index) => {
            const bentoClasses = getBentoClasses(index);

            return (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`
                    ${bentoClasses}

                    group
                    relative
                    h-full
                    w-full
                    overflow-hidden

                    rounded-2xl
                    sm:rounded-3xl

                    border
                    border-[#E4E9EE]

                    bg-white

                    text-left

                    shadow-[0_4px_20px_rgba(24,36,51,0.04)]

                    transition-all
                    duration-500

                    hover:-translate-y-[2px]

                    hover:shadow-[0_18px_45px_rgba(24,36,51,0.12)]
                    cursor-pointer
                  `}
              >
                {/* =========================================
                      IMAGE
                  ========================================== */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                  className="
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-110
                    "
                />

                {/* =========================================
                      GRADIENT OVERLAY
                  ========================================== */}

                <div
                  className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#182433]/80
                      via-[#182433]/10
                      to-transparent

                      opacity-40

                      transition-opacity
                      duration-500

                      group-hover:opacity-95
                    "
                />

                {/* =========================================
                      ZOOM ICON
                  ========================================== */}

                <div
                  className="
                      absolute
                      right-3
                      top-3

                      flex
                      h-9
                      w-9
                      translate-y-1

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/30

                      bg-white/90

                      text-[#182433]

                      opacity-0

                      shadow-lg

                      backdrop-blur-md

                      transition-all
                      duration-300

                      group-hover:translate-y-0
                      group-hover:opacity-100

                      sm:right-4
                      sm:top-4
                      sm:h-10
                      sm:w-10
                    "
                >
                  <ZoomIn size={16} strokeWidth={1.8} />
                </div>

                {/* =========================================
                      IMAGE INFO
                  ========================================== */}

                <div
                  className="
                      absolute
                      bottom-0
                      left-0
                      right-0

                      translate-y-2

                      p-3

                      opacity-0

                      transition-all
                      duration-500

                      group-hover:translate-y-0
                      group-hover:opacity-100

                      sm:p-5
                    "
                >
                  <span
                    className="
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white/65

                        sm:text-[12px]
                      "
                  >
                    {item.category}
                  </span>

                  {/* <h3
                    className="
                        mt-1
                        text-[13px]
                        font-medium
                        text-white

                        sm:text-[15px]
                      "
                  >
                    {item.title}
                  </h3> */}
                </div>
              </button>
            );
          })}
        </div>

        {/* ====================================================
            SHOW MORE / SHOW LESS
        ===================================================== */}

        {filteredImages.length > 8 && (
          <div
            className="
              mt-10
              flex
              justify-center
              
            "
          >
            <button
              onClick={() => setShowAll((previous) => !previous)}
              className="
                group

                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-[#415A77]

                bg-white

                px-6
                py-3

                text-[14px]
                font-semibold

                text-[#415A77]

                transition-all
                duration-300
                cursor-pointer
                hover:bg-[#415A77]
                hover:text-white

                hover:shadow-[0_10px_30px_rgba(65,90,119,0.18)]
              "
            >
              {showAll ? (
                <>
                  Show Less
                  <Minus
                    size={16}
                    strokeWidth={2}
                    className="
                    cursor-pointer
                      transition-transform
                      duration-300
                      group-hover:rotate-180
                    "
                  />
                </>
              ) : (
                <>
                  Show More
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="
                      cursor-pointer
                      transition-transform
                      duration-300
                      group-hover:rotate-90
                    "
                  />
                </>
              )}
            </button>
          </div>
        )}
      </section>

      {/* ======================================================
          LIGHTBOX
      ======================================================= */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            bg-[#182433]/90

            p-3
            sm:p-5

            backdrop-blur-md
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* ==================================================
              CLOSE BUTTON
          =================================================== */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-4
              top-4
              z-30

              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white
              hover:text-[#182433]

              sm:right-6
              sm:top-6
              sm:h-11
              sm:w-11
              cursor-pointer
            "
            aria-label="Close image"
          >
            <X size={20} />
          </button>

          {/* ==================================================
              PREVIOUS BUTTON
          =================================================== */}

          <button
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            className="
              absolute
              left-2
              top-1/2
              z-30

              flex
              h-10
              w-10

              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white
              hover:text-[#182433]

              sm:left-6
              sm:h-11
              sm:w-11
              cursor-pointer
            "
            aria-label="Previous image"
          >
            <ChevronLeft size={21} />
          </button>

          {/* ==================================================
              NEXT BUTTON
          =================================================== */}

          <button
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            className="
              absolute
              right-2
              top-1/2
              z-30

              flex
              h-10
              w-10

              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              text-white

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-white
              hover:text-[#182433]

              sm:right-6
              sm:h-11
              sm:w-11
              cursor-pointer
            "
            aria-label="Next image"
          >
            <ChevronRight size={21} />
          </button>

          {/* ==================================================
              LIGHTBOX CONTENT
          =================================================== */}

          <div
            className="
              relative

              flex
              max-h-[92vh]
              max-w-[1200px]

              flex-col
              items-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* IMAGE */}

            <div
              className="
                relative

                max-h-[80vh]

                w-[calc(100vw-70px)]

                max-w-[1100px]

                overflow-hidden

                rounded-2xl
                bg-[#F8FAFC]

                shadow-2xl

                sm:rounded-3xl
              "
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1600}
                height={1100}
                priority
                className="
                  max-h-[80vh]
                  w-full
                  object-contain
                "
              />
            </div>

            {/* IMAGE INFORMATION */}

            <div
              className="
                mt-3
                text-center
                sm:mt-4
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/50

                  sm:text-[11px]
                "
              >
                {selectedImage.category}
              </p>

              <h3
                className="
                  mt-1
                  text-[14px]
                  font-medium
                  text-white

                  sm:text-[16px]
                "
              >
                {selectedImage.title}
              </h3>

              <p
                className="
                  mt-1
                  text-[10px]
                  text-white/40

                  sm:text-[11px]
                "
              >
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
