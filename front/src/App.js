import { useState, useEffect } from "react";

import Page from "./component/page";
import PostList from "./container/post-list";

// function App() {
//   const [isHidden, setHidden] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setHidden(true);
//     }, 5000);
//   }, []);

// function App() {
//   return (
//     <Page>
//       <PostList />
//     </Page>
//   );
// }

// return (
//   <Page>
//     <PostList />
//   </Page>
// );

function App() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   function handleMove(e) {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   }

  //   window.addEventListener("pointermove", handleMove);
  //   return () => {
  //     window.removeEventListener("pointermove", handleMove);
  //   };
  // }, []);

  // return (
  //   <page>
  //     <postlist />
  //     <div
  //       style={{
  //         position: "absolute",
  //         backgroundcolor: "pink",
  //         borderradius: "50%",
  //         opacity: 0.6,
  //         transform: `translate(${position.x}px, ${position.y}px)`,
  //         parentevents: "none",
  //         left: -20,
  //         top: -20,
  //         width: 40,
  //         height: 40,
  //       }}
  //     />
  //   </page>
  // );

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Помилка отримання геолокації:", error.message);
        }
      );
    } else {
      console.log("Геолокація не підтримується в цьому браузері.");
    }
  }, []);

  return (
    <Page>
      {location ? (
        <div>
          <h2>Ваша геолокація:</h2>
          <p>Широта: {location.latitude}</p>
          <p>Довгота: {location.longitude}</p>
        </div>
      ) : (
        <p>Отримання геолакції...</p>
      )}
    </Page>
  );
}

// export function useWindowListener(eventType, listener) {
//   useEffect(() => {
//     window.addEventListener(eventType, listener);
//     return () => {
//       window.removeEventListener(eventType, listener);
//     };
//   }, [eventType, listener]);
// }

export default App;
