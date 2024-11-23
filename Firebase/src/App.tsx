import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Chat from "./pages/Chat";
import NavBar from "./components/NavBar";
import Publish from "./pages/Publish";
import Profile from "./pages/Profile";
import "./App.css";
import AboutPage from "./pages/About";
import ProfileEditPage from "./pages/Edit";
// import PerformanceReview from "./pages/Performance";
// import TimeTracking from "./pages/TimeTracking";
// import TaskManagement from "./pages/TaskMangement";
// import Component from "./pages/Check";


function App() {
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const [isPointerOnScreen, setIsPointerOnScreen] = useState(true);

  useEffect(() => {
    const cursorCircle = cursorCircleRef.current;

    const updateCursorPosition = (x: number, y: number) => {
      if (cursorCircle) {
        gsap.to(cursorCircle, {
          x: x + 80,
          y: y + 80,
          duration: 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => {
      setIsPointerOnScreen(true);
      if (cursorCircle) {
        gsap.to(cursorCircle, { scale: 1, duration: 0.5 });
      }
    };

    const handleMouseLeave = () => {
      setIsPointerOnScreen(false);
      if (cursorCircle) {
        gsap.to(cursorCircle, { scale: 0, duration: 0.5 });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-gray-800">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/editProfile/:id" element={<ProfileEditPage />} />
        {/* <Route path="/check" element={<Component />} /> */}
        {/* <Route path="/tasks" element={<TaskManagement />} /> */}
        {/* <Route path="/time-tracking" element={<TimeTracking />} /> */}
        {/* <Route path="/performance-review" element={<PerformanceReview />} /> */}
      </Routes>
      <div
        ref={cursorCircleRef}
        id="cursorCircle"
        className="fixed w-6 h-6 rounded-full pointer-events-none sparkle-ball"
      ></div>
    </div>
  );
}

export default App;
