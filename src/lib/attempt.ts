export const FAILED_ATTEMPT_KEY = "birthday-party-failed";

export function hasFailedAttempt() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(FAILED_ATTEMPT_KEY) === "failed";
  } catch {
    return false;
  }
}

export function markFailedAttempt() {
  try {
    window.localStorage.setItem(FAILED_ATTEMPT_KEY, "failed");
  } catch {
    // Private mode can block storage. The redirect still ends this visit.
  }
}

export function leaveAfterFailure() {
  markFailedAttempt();
  window.location.replace("/sorry");
}
