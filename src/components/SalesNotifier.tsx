"use client";

import { useState, useEffect, useRef } from "react";
import { LiveSalesNotification } from "./LiveSalesNotification";

const names = [
  "Maria S.", "Juliana P.", "Carla F.", "Ana L.", "Sofia M.", "Laura C.", "Beatriz A.",
  "Gabriela T.", "Manuela B.", "Isabela G.", "Clara V.", "Helena R.", "Alice J."
];

const messages = [
  (name: string) => `${name} acabou de comprar!`,
  (name: string) => `${name} garantiu sua vaga.`,
  (name: string) => `Mais uma cliente feliz! Bem-vinda, ${name}!`,
];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomTime = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min) * 1000;

export function SalesNotifier() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const showNotification = () => {
      const randomName = getRandomElement(names);
      const randomMessageFunc = getRandomElement(messages);
      setMessage(randomMessageFunc(randomName));
      setIsVisible(true);

      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      timeouts.current.push(hideTimeout);
    };
    
    const scheduleNextNotification = () => {
        const nextTime = getRandomTime(8, 20);
        const scheduleTimeout = setTimeout(() => {
            showNotification();
            scheduleNextNotification();
        }, nextTime);
        timeouts.current.push(scheduleTimeout);
    }

    const initialTimeout = setTimeout(() => {
        showNotification();
        scheduleNextNotification();
    }, 7000);
    timeouts.current.push(initialTimeout);

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <LiveSalesNotification
      message={message}
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
    />
  );
}
