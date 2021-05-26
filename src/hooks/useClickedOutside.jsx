import { useEffect } from "react"

export default function useClickedOutside(ref, callback) {
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [ref, callback])
}
