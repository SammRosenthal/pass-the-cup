import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";

export const CreateGameModal = () => {
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

  // placeholder not fully implemented yet
  return (
    <>
      <div className="flex w-full">
        <button
          type="button"
          className="max-w-md relative flex w-4/5 justify-center mx-auto mb-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          onClick={() => setIsOpen(true)}
        >
          <span>Create Game</span>
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
                Create Your Game
              </Dialog.Title>
              <Dialog.Description className="text-center pb-4">
                Choose the initial settings for your game.
              </Dialog.Description>
              <form
                onSubmit={handleSubmit(() => {
                  console.log("submitted for to create a game");
                })}
                className="flex flex-col gap-y-8 items-center"
              >
                <h2 className="text-center">
                  This could be an intense for to create the game
                </h2>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CreateGameModal;
