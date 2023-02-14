/* eslint-disable @next/next/no-img-element */
import Profile from '@/src/components/Profile';
import Schedule from '@/src/components/Schedule';
import Head from 'next/head';
import { SlScreenDesktop } from 'react-icons/sl';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meeting-Date</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row" style={{ height: '100vh' }}>
          <div className="col-md-2 d-none d-md-block">
            <div className="logo">
              <img src="/logo.jpg" alt="" />
            </div>
          </div>

          <div className="col-sm-12 col-md-8  bg-light ">
            <div className="title d-flex flex-column flex-xl-row m-3 mt-5">
              <h2 className="">កាលវិភាគកិច្ចប្រជុំ</h2>
              <p className=" fw-bold">ថ្ងៃ ច័ន្ទ ទី០៦ ខែ កុម្ភៈ ឆ្នាំ​ ២០២៣</p>
            </div>

            <div className="d-md-none d-block">
              {/* <div className="profile  d-flex flex justify-content-center">
                <img src="/profile.jpg" alt="" className="shadow-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-center">Mr.Sok Dara</h3>
                <p className="text-center">Web Developer</p>
              </div> */}
              <Profile />
            </div>

            <div className="schedule overflow-hidden">
              <div className="d-flex py-3">
                <div>08:00</div>
                <div className="ms-4">
                  ............................................................................................................................................................................................................................................................................................................................
                </div>
              </div>             
              <Schedule/>
              <div className="d-flex py-3">
                <div>08:00</div>
                <div className="ms-4">
                  ............................................................................................................................................................................................................................................................................................................................
                </div>
              </div>
              <div className="d-flex w-fluid align-items-center py-1">
                <div>08:00</div>
                <div
                  className="ms-4 w-100 rounded"
                  style={{ background: '#AEE2FF' }}
                >
                  <div className="d-flex flex-column-reverse flex-sm-row  justify-content-between p-2">
                    <div className="d-flex">
                      <div
                        className="align-self-center px-2 py-1 rounded me-3"
                        style={{ background: '#85CDFD' }}
                      >
                        <SlScreenDesktop size={15} />
                      </div>
                      <div>
                        <h6 className="m-0">Enlish Lesson</h6>
                        <p className="m-0">8:30-9:00</p>
                      </div>
                    </div>
                    <div className="align-self-center fs-5 fw-bold me-sm-4">
                      Angkor Wet
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-fluid align-items-center py-1">
                <div>08:00</div>
                <div
                  className="ms-4 w-100 rounded"
                  style={{ background: '#F2DEBA' }}
                >
                  <div className="d-flex flex-column-reverse flex-sm-row  justify-content-between p-2">
                    <div className="d-flex">
                      <div
                        className="align-self-center px-2 py-1 rounded me-3"
                        style={{ background: '#FFD56F' }}
                      >
                        <SlScreenDesktop size={15} />
                      </div>
                      <div>
                        <h6 className="m-0">Enlish Lesson</h6>
                        <p className="m-0">8:30-9:00</p>
                      </div>
                    </div>
                    <div className="align-self-center fs-5 fw-bold me-sm-4">
                      Angkor Wet
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex py-3">
                <div>08:00</div>
                <div className="ms-4">
                  ............................................................................................................................................................................................................................................................................................................................
                </div>
              </div>
              <div className="d-flex w-fluid align-items-center py-1">
                <div>09:00</div>
                <div
                  className="ms-4 w-100 rounded"
                  style={{ background: '#DDDDDD' }}
                >
                  <div className="d-flex flex-column-reverse flex-sm-row  justify-content-between p-2">
                    <div className="d-flex">
                      <div
                        className="align-self-center px-2 py-1 rounded me-3"
                        style={{ background: '#EEEEEE' }}
                      >
                        <SlScreenDesktop size={15} />
                      </div>
                      <div className="">
                        <h6 className="m-0">Enlish Lesson</h6>
                        <p className="m-0">8:30-9:00</p>
                      </div>
                    </div>
                    <div className="align-self-center  fw-bold me-sm-4">
                      Angkor Wet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
