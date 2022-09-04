import React from "react";
import { PlusSmIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";

export const JoinGameModal = () => {
  let [isOpen, setIsOpen] = React.useState(false);

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
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            id="modal-bg"
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
          <Dialog
            className="relative z-50"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Panel className="w-full max-w-sm rounded bg-white">
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
              <span>
                Room ID:
                <input />
              </span>
            </Dialog.Panel>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default JoinGameModal;
