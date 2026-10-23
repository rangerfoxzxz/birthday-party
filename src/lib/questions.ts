export type ChoiceQuestion = {
  step: 2 | 3 | 4;
  title: string;
  choices: readonly [string, string, string, string];
  nextHref: "/quiz/3" | "/quiz/4" | "/finale";
};

export const CORRECT_CHOICE = 3;

export const choiceQuestions: Record<2 | 3 | 4, ChoiceQuestion> = {
  2: {
    step: 2,
    title: "วันเกิดของ Misfortune คือวันไหน",
    choices: ["26 มกราคม", "26 เมษายน", "26 กรกฎาคม", "26 ตุลาคม"],
    nextHref: "/quiz/3",
  },
  3: {
    step: 3,
    title: "ในงานนี้ควรพูดว่าอะไร",
    choices: ["ราตรีสวัสดิ์", "สุขสันต์วันปีใหม่", "โชคดีนะ", "สุขสันต์วันเกิด"],
    nextHref: "/quiz/4",
  },
  4: {
    step: 4,
    title: "พอตอบครบแล้ว จะเจออะไร",
    choices: ["ลูกโป่ง", "เค้ก", "ดอกไม้ไฟ", "เลขลับ"],
    nextHref: "/finale",
  },
};
