import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-900 bg-white dark:bg-boxdark">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-2 px-4 pt-4 md:grid-cols-4 md:gap-10 lg:grid-cols-8">
            <div className="col-span-4">
              <div className="col-span-4 pb-3 text-center italic">
                This project is driven by{" "}
                <a className="font-semibold dark:text-white">the enthusiasm</a>{" "}
                of our team:
              </div>
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-5 pb-2">
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pb-3 pt-2">
                    <Image
                      width={32}
                      height={32}
                      className="h-10 w-10 rounded-full"
                      src="/image/chiiu.jpg"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Thanh Nhã</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="pb-1 font-bold dark:text-white">
                Project&#39;s Description
              </div>
              <div className="pt-3 font-medium">
                In this time, we have tried to bring a platform to help students
                to print their documents easily. With{" "}
                <a className="text-gray-900 font-semibold italic underline decoration-blue-500 dark:text-white">
                  special features
                </a>
                , we hope that this project can be beneficial to our students.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
