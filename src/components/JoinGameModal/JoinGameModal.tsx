import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";

export const JoinGameModal = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{ gameCode: string }>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  return (
    <>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          onClick={() => setIsOpen(true)}
        >
          <span>Join Existing Game</span>
        </button>
      </div>

      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            reset();
          }}
          className="relative z-50"
        >
          <div
            id="modal-bg"
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="self-center rounded bg-white p-4 mx-2">
              <Dialog.Title className="text-center text-xl font-bold pb-1">
                Enter Code
              </Dialog.Title>
              <Dialog.Description className="text-center pb-4">
                Enter your game code to join an active game.
              </Dialog.Description>
              <form
                onSubmit={handleSubmit(({ gameCode }) => {
                  console.log(
                    "trying to join room with this code -> ",
                    gameCode
                  );
                  // will join game and navigate accordingly
                  setIsOpen(false);
                  reset();
                })}
                className="flex flex-col gap-y-8 items-center"
              >
                <div>
                  <label htmlFor="gameCode" className="sr-only">
                    Enter Game Code
                  </label>
                  <div className="mt-1 flex">
                    <span
                      className={`inline-flex items-center rounded-l-md border border-r-0 ${
                        errors.gameCode ? "border-red-500" : "border-gray-300"
                      } bg-gray-50 px-3 text-gray-500 sm:text-sm`}
                    >
                      Game Code:
                    </span>
                    <input
                      type="text"
                      id="gameCode"
                      autoComplete="off"
                      maxLength={5}
                      className={`block w-full min-w-0 flex-1 rounded-none rounded-r-md border ${
                        errors.gameCode ? "border-red-500" : "border-gray-300"
                      } px-3 py-2  sm:text-sm`}
                      {...register("gameCode", { minLength: 5 })}
                    />
                    {errors.gameCode && (
                      <div className="relative right-7 top-2 pointer-events-none w-0">
                        <ExclamationCircleIcon
                          className="h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {errors.gameCode && (
                    <span className="pl-2 text-xs text-red-500">
                      Game Codes must be 5 characters long.
                    </span>
                  )}
                </div>
                <button className="-mt-4 w-full flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                  Join Game
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default JoinGameModal;
