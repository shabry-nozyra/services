"use client";
import SidebarLink from "@/components/Docs/SidebarLink";
import { useState } from "react";

import SectionHeader from "@/components/Common/SectionHeader";

export default function MarketplacePage() {
  // Accordion open state
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  // Checkbox state
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({});
  // Add parent (category) filter state
  const [parentFilters, setParentFilters] = useState<{ [key: string]: boolean }>({});

  const filterData = [
    {
      category: "Communications",
      options: [
        { key: "ccaas", label: "CCaaS (Contact Center as a Service)" },
        { key: "ucaas", label: "UCaaS (Unified Communications as a Service)" },
        { key: "voip", label: "VoIP (Voice Over Internet Protocol)" },
      ],
    },
    {
      category: "Continuity",
      options: [
        { key: "backup", label: "Backup" },
        { key: "disaster_recovery", label: "Disaster recovery" },
        { key: "email_archiving", label: "Email archiving" },
        { key: "file_sharing", label: "File sharing" },
        { key: "saas_backup", label: "SaaS backup" },
      ],
    },
    { category: "Human Resources", options: [] },
    { category: "Infrastructure", options: [] },
    { category: "Integrations", options: [] },
    { category: "IT Operations", options: [] },
    { category: "Network", options: [] },
    { category: "Productivity", options: [] },
    { category: "Sales and Marketing", options: [] },
    { category: "Security", options: [] },
  ];

  const handleAccordion = (cat: string) => {
    setOpenAccordion(openAccordion === cat ? null : cat);
  };

  const handleCheckbox = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCategoryState = (cat) => {
    if (!cat.options.length) return false;
    const checkedCount = cat.options.filter((opt) => filters[opt.key]).length;
    if (checkedCount === cat.options.length) return true;
    if (checkedCount === 0) return false;
    return "indeterminate";
  };

  const handleCategoryCheckbox = (cat) => {
    setParentFilters((prev) => ({ ...prev, [cat.category]: !prev[cat.category] }));
  };

  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-start py-24 lg:py-56">
          <div className=" md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-white dark:text-white">
              NOZYRA IT Solutions
            </h4>
            <h1 className="mb-5 pr-16 text-4xl font-bold text-white dark:text-white xl:text-6xl ">
              The best solution

              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                for you
              </span>
            </h1>
            <p className="text-white dark:text-white">
              NOZYRA is dedicated to have people make use of our technology solutions. So, wether it’s mobile consumer, applications or services, we’ll have you covered.
            </p>

            <div className="mt-10">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-meta hover:bg-meta focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See what's new
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-meta border border-green-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Explore Services
              </a>
              {/* 
                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Marketplace`,
                subtitle: `The Marketplace Is Different. Here's How.`,
                description: ``,
              }}
            />
          </div>
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">

              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://www.pax8.com/en-uk/wp-content/uploads/sites/6/2024/07/pax8-marketplace-features-opportunity-explorer-emea.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Opportunity Explorer
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Identify sales opportunities, reveal security gaps and define recommendations across comparative vendor solutions.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-gray-800 hover:text-meta dark:text-blue-500 dark:hover:text-blue-700"
                    >
                      Discover Opportunity Explorer.
                      <svg
                        className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>
          {/* <!-- Section Title End --> */}
        </div>
      </section>
      {/* Services Ends */}

      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `What Your Business Needs`,
                subtitle: `Browse vendors by category or keyword:`,
                description: ``,
              }}
            />
          </div>
          <hr />

          <div className="-mx-4 flex flex-wrap mt-8">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <h3 className="mb-4 font-semibold">Filter By</h3>
                <div className="space-y-2">
                  {filterData.map((cat) => (
                    <div key={cat.category}>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={!!parentFilters[cat.category]}
                          onChange={() => handleCategoryCheckbox(cat)}
                          className="accent-green-600 rounded"
                        />
                        <button
                          type="button"
                          className="flex-1 flex items-center justify-between py-2 text-left font-medium focus:outline-none"
                          onClick={() => handleAccordion(cat.category)}
                          aria-expanded={openAccordion === cat.category}
                        >
                          <span>{cat.category}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${openAccordion === cat.category ? "rotate-90" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      {cat.options.length > 0 && openAccordion === cat.category && (
                        <div className="pl-4 py-2 space-y-1">
                          {cat.options.map((opt) => (
                            <label key={opt.key} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!filters[opt.key]}
                                onChange={() => handleCheckbox(opt.key)}
                                className="accent-green-600 rounded"
                              />
                              <span>{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
               

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Services not found
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
