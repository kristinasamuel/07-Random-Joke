//  Random joke Generator App

"use client"; // for client side rendering
import { useState, useEffect } from "react"; // react hooks
// import button from shadcn library
import { Button } from "./ui/button";

// create a interface
interface JokeResponse {
  setup: string;
  punchline: string;
}
//  export default function Random Joke 
export default function RandomJoke() {
  //  useState hook
  const [joke, setJoke] = useState<string>("");

  //   useEffect Hook 
  useEffect(() => {
    // call fetchJoke function
    fetchJoke();
  }, []);

  {
    /* aysnc function to handle api */
  }
  async function fetchJoke(): Promise<void> {
    try {
      {/*Make a request to fetch joke from api*/}
      const responce = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
    //  Update state to fetch data in this sequence
      const data: JokeResponse = await responce.json();
      setJoke(`${data.setup} = ${data.punchline}`);
      { /* If the fetch process fail , show error message*/}
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("failed to fetch joke.please try again");
    }
  }
  //  Jxs return statement
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-400 to-indigo-400 p-6">
      <div className="bg-gray-300 rounded-2xl shadow-lg p-6 w-full max-w-md">
        {/* Heading , styling ,font ,size */}
        <h1 className="text-2xl font-bold mb-4 text-center justify-center  ">
        👉Random Joke😊 
        </h1>
        {/* Get jokes through Api */}
        <div className="bg-white rounded-lg p-4 mb-6 italic text-lg">
          {joke || "Loading..."}
        </div>
        {/* Button to get a new joke */}
        <Button
          onClick={fetchJoke}
          className="bg-green-700 hover:bg-green-500 text-white font-bold  rounded-full transition-colors  duration-300"
        >
          New Joke 😎
        </Button>
      </div>
    </div>
  );
}

