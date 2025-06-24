
"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    let notificationTimeout: NodeJS.Timeout;

    const showNotification = () => {
      const randomName = getRandomElement(names);
      const randomMessageFunc = getRandomElement(messages);
      setMessage(randomMessageFunc(randomName));
      setIsVisible(true);

      notificationTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Visible for 5 seconds
    };
    
    const scheduleNextNotification = () => {
        const nextTime = getRandomTime(8, 20); // Schedule next notification between 8-20 seconds
        setTimeout(() => {
            showNotification();
            scheduleNextNotification();
        }, nextTime)
    }

    const initialTimeout = setTimeout(() => {
        showNotification();
        scheduleNextNotification();
    }, 7000);


    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(notificationTimeout);
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
