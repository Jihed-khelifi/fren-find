import { FC, createRef } from "react";
import CupIcon from "../assets/images/cup.png";
import Badge from "../assets/images/badge.png";
import { Link } from "react-router-dom";


const LeaderBoard: FC = () => {
  const leaderBoardRef = createRef<HTMLDivElement>();

  // useEffect(() => {
  //   const getLeaderBoardInfos = async () => {
  //     const result = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/leaderboard-by-score`
  //     );
  //     const { data } = await result.json();
  //     setUsers(data);
  //     console.log(users);
  //   };
  //   getLeaderBoardInfos();
  // }, [users]);

  return (
    <div className=' transition-all absolute grid place-items-center bg-[url("./assets/images/endscr.png")] z-50 max-h-7xl h-full top-0  w-full max-w-8xl '>
      <div
        className="transition-all relative max-h-7xl bg-white/70 max-w-7xl w-full h-4/5  rounded-xl py-8 px-24"
        ref={leaderBoardRef}
      >
        <div>
          <p className="text-center text-4xl font-['Lato'] text font-[900] uppercase tracking-wide text-teal-700/90">
            leader board
          </p>
          <div className="flex flex-col gap-4 mt-5 text-white font-bold">
            <div className="bg-teal-600/95 py-[6px] rounded-2xl">
              <div className="flex justify-between items-center px-10">
                <div className="flex items-center gap-4 justify-between text-lg w-full">
                  <img src={CupIcon} alt="cup" className="w-10" />
                  <span className="text-amber-300 text-2xl font-['Lato'] font-[900]">
                    1
                  </span>
                  <div className="relative bg-white rounded-xl  h-[60px] flex  w-[120px]  items-center ">
                    <div className="absolute aspect-square -top-[6.5px] -left-4">
                      <div className="rounded-full bg-teal-600/90   p-1 absolute">
                        <div className="rounded-full p-1 grid place-items-center  relative h-[65px] w-[65px]  bg-white ">
                          <div className="rounded-full aspect-square bg-white p">
                            <span className="text-black text-xs text-center">
                              <p>Twitter</p>
                              <p>avatar</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={Badge}
                      alt=""
                      className=" absolute right-6 float-right"
                    />
                  </div>
                  <div>
                    <p>Score: 1000</p>
                  </div>
                  <div>
                    <p>Found: 10</p>
                  </div>
                  <div>
                    <p>time: 10m 40s</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p>ID: 22903208R080E293</p>
                    <span className="p-2 bg-amber-400 rounded-full aspect-square h-5"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 right-5 -translate-y-1/2">
          <button
            className="w-0 h-0 
                      hover:scale-[1.1] transition-all
                      shadow-inner 
                      border-l-[20px] border-l-transparent
                      border-b-[50px] border-b-amber-600/90
                      border-r-[20px] border-r-transparent"
            onClick={() => {
              console.log("clicked");
            }}
          ></button>
          <button
            className="w-0 h-0 
                    border-l-[20px] border-l-transparent
                    shadow-inner 
                    hover:scale-[1.1] transition-all
                    border-t-[50px] border-t-amber-600/90
                    border-r-[20px] border-r-transparent"
          ></button>
        </div>

        <div className="absolute bottom-4 right-1/2 translate-x-1/2">
          <Link
            className="bg-white rounded-xl py-1 px-16 hover:scale-[1.02] transition-all text-2xl shadow-inner uppercase font-bold "
            to={"/"}
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
