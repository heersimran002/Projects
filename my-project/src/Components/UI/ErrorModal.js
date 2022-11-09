import React from "react";
import Button from "./Button";
import Card from "./Card";

function ErrorModal(props) {
  return (
    <Card>
      <div
        className="fixed z-1 overflow-y-auto top-0 w-full left-0 "
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className=" sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <h1>{props.title}</h1>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {props.message}
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <Button onclick="toggleModal()">
                <i className="fas fa-times"></i> Cancel
              </Button>
              <Button>
                <i className="fas fa-plus"></i> Create
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ErrorModal;
