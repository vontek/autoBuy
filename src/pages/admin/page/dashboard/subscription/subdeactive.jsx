import { Button } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"

import { RiDeleteBin6Line } from "react-icons/ri";
export default function SubDeactive() {
  const [isShowing, setIsShowing] = useState(false)
    
  const wrapperRef = useRef(null)

  

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    let html = document.querySelector("html")

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden"

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

        const modal = document.querySelector("#modal") // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements)

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus() // add focus for the last focusable element
              e.preventDefault()
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus() // add focus for the first focusable element
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = "visible"
      }
    }
  }, [isShowing])

  return (
    <>
    <div className='text-red-700 flex gap-2 ' style={{cursor: 'pointer'}} onClick={() => setIsShowing(true)}>Deactivate Plan <RiDeleteBin6Line className='mt-1'/> </div>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-5a content-5a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh]   max-w-xs flex-col gap-6 overflow-hidden rounded bg-white p-6 text-center text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header
                  id="header-5a"
                  className="flex flex-col items-center gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 stroke-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-21 desc-21"
                  >
                    <title id="title-21">Icon title</title>
                    <desc id="desc-21">
                      A more detailed description of the icon
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    Are you sure you want to deactive this plan?
                  </h3>
                </header>
                {/*        <!-- Modal body --> */}
                <div id="content-5a" className="flex-1 overflow-auto text-[11px]">
                  <p>Deactivating this plan will restrict access to its associated features and functionalities for users. Are you sure you want to proceed?</p>
                </div>
                {/*        <!-- Modal actions --> */}
                <div className="flex justify-start gap-9">
              
                  <Button className="bg-red-500">Deactivate</Button>
                 
                  <Button className="bg-secondary-normal">Cancel</Button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}