import React from "react";
import { PlusSmIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";

export const JoinGameModal = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
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
          <PlusSmIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div
            id="modal-bg"
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
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
                <label>
                  Game Code:
                  <input
                    type="text"
                    className="border ml-2"
                    maxLength={5}
                    autoComplete="off"
                    {...register("gameCode", { minLength: 5, maxLength: 5 })}
                  />
                </label>
                {errors.gameCode && (
                  <span className="text-red-500 -my-5">
                    Game Codes must be 5 characters long!
                  </span>
                )}
                <button
                  disabled={!isValid}
                  type="submit"
                  className="self-end inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
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
