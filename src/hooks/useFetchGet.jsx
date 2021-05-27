import { useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"

export default function useFetchGet(url, setStatus) {
  useEffect(() => {
    const headers = {
      headers: {
        "X-API-Key": process.env.REACT_APP_X_API_KEY,
        Accept: "application/json",
      },
    }

    fetchGet()

    async function fetchGet() {
      const promise = axios.get(url, headers)
      setStatus(prevStatus => ({ ...prevStatus, isLoading: true }))
      toast.promise(promise, {
        loading: "Loading...",
        success: "Data loaded successfully",
        error:
          "Oh no! There was an error loading your data. Please refresh the page.",
      })
      try {
        const res = await promise
        await setStatus(prevStatus => ({
          ...prevStatus,
          data: res.data.sort((a, b) => a.id - b.id),
        }))
      } catch (error) {
        await setStatus(prevStatus => ({ ...prevStatus, error: error.message }))
        console.error("fetchGet threw an error:", error)
      } finally {
        setStatus(prevStatus => ({ ...prevStatus, isLoading: false }))
      }
    }
  }, [setStatus, url])
}
