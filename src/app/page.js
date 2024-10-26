"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TimerContainer } from "../components/TimerContainer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  const [time, setTime] = useState(66);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");

  const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = new Date().getTime() + timeToDays;
  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="h-[100vh]">
        <img
          src="/hamsi.webp"
          alt="Hamsi Creative Fashions"
          width="100%"
          height="100vh"
        />
      </div>
      <div className="h-[100vh]">
        <Header message={message} />
        <TimerContainer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
