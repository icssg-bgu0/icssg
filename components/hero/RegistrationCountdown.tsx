"use client";

import { useEffect, useState } from "react";
import { getCountdown } from "@/lib/utils";
import { PREVIOUS_SUBMISSION_DEADLINE_LABEL, REGISTRATION_DEADLINE, REGISTRATION_DEADLINE_LABEL } from "@/lib/registrationDeadline";
import styles from "./RegistrationCountdown.module.css";

type Countdown = ReturnType<typeof getCountdown>;
const units = ["days", "hours", "minutes", "seconds"] as const;

function FlipCard({ value, previous }: { value: string; previous: string }) {
  const flipping = previous !== value;

  return (
    <div className={styles.card} aria-hidden="true">
      <div className={`${styles.half} ${styles.top}`}><span>{value}</span></div>
      <div className={`${styles.half} ${styles.bottom}`}><span>{flipping ? previous : value}</span></div>
      {flipping && (
        <div key={value} className={styles.flaps}>
          <div className={`${styles.half} ${styles.top} ${styles.flipTop}`}><span>{previous}</span></div>
          <div className={`${styles.half} ${styles.bottom} ${styles.flipBottom}`}><span>{value}</span></div>
        </div>
      )}
      <div className={styles.hinge} />
    </div>
  );
}

export function RegistrationCountdown() {
  // Keep server and initial client markup identical; read the clock after mount.
  const [clock, setClock] = useState<{ current: Countdown; previous: Countdown } | null>(null);

  useEffect(() => {
    const update = () => {
      const current = getCountdown(REGISTRATION_DEADLINE);
      setClock((last) => ({ current, previous: last?.current ?? current }));
      if (current.isExpired) window.clearInterval(interval);
    };
    const interval = window.setInterval(update, 1000);
    update();
    // Catch up immediately when returning to a backgrounded tab.
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section className={styles.panel} aria-labelledby="registration-countdown-title">
      <p className={styles.eyebrow}>Make it official</p>
      <h2 id="registration-countdown-title" className={styles.title}>Submission Deadline</h2>
      <p className={styles.date}>
        <del className={styles.oldDate}>{PREVIOUS_SUBMISSION_DEADLINE_LABEL}</del>
        <span className={styles.extendedDate}>Extended to <time dateTime={REGISTRATION_DEADLINE}>{REGISTRATION_DEADLINE_LABEL}</time></span>
        <span className={styles.dateDivider}> · </span>11:59 p.m. IST
      </p>
      <div className={styles.clock} role="timer" aria-live="off" aria-label="Time remaining to submit your paper">
        <span className="sr-only">
          {clock ? `${clock.current.days} days, ${clock.current.hours} hours, ${clock.current.minutes} minutes, ${clock.current.seconds} seconds remaining` : "Loading countdown"}
        </span>
        {units.map((unit) => (
          <div className={styles.unit} key={unit}>
            <FlipCard
              value={clock ? String(clock.current[unit]).padStart(2, "0") : "--"}
              previous={clock ? String(clock.previous[unit]).padStart(2, "0") : "--"}
            />
            <span className={styles.label} aria-hidden="true">{unit}</span>
          </div>
        ))}
      </div>
      <p className={styles.status} role="status">
        {clock?.current.isExpired ? "Submission deadline reached" : "Submit your paper before time runs out."}
      </p>
      {!clock?.current.isExpired && <a className={styles.link} href="#call-for-papers">Submission details <span aria-hidden="true">→</span></a>}
    </section>
  );
}
