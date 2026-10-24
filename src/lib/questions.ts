export type ChoiceQuestion = {
  step: 2 | 3 | 4;
  title: string;
  choices: readonly string[];
  correctIndex: number;
  /** Clicking this choice swaps the list for `expandedChoices`. Every new choice passes. */
  expandIndex?: number;
  expandedChoices?: readonly string[];
  nextHref: "/quiz/3" | "/quiz/4" | "/finale";
};

export const choiceQuestions: Record<2 | 3 | 4, ChoiceQuestion> = {
  2: {
    step: 2,
    title: "Misfortune เป็นคนเจ้าชู้หรือไม่",
    choices: ["ไม่เจ้าชู้", "เจ้าชู้"],
    correctIndex: 0,
    expandIndex: 1,
    expandedChoices: ["ไม่เจ้าชู้", "ไม่เจ้าชู้", "ไม่เจ้าชู้", "ไม่เจ้าชู้"],
    nextHref: "/quiz/3",
  },
  3: {
    step: 3,
    title: "ในงานนี้ควรพูดว่าอะไร",
    choices: ["ราตรีสวัสดิ์", "สุขสันต์วันปีใหม่", "โชคดีนะ", "สุขสันต์วันเกิด"],
    correctIndex: 3,
    nextHref: "/quiz/4",
  },
  4: {
    step: 4,
    title: "พอตอบครบแล้ว จะเจออะไร",
    choices: ["ลูกโป่ง", "เค้ก", "ดอกไม้ไฟ", "เลขลับ"],
    correctIndex: 3,
    nextHref: "/finale",
  },
};
