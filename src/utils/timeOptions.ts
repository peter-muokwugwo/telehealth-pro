export type TimeOption = {
    value: string;
    label: string;
}

export const timeOptions: TimeOption[] = [
  { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (12:00 PM - 5:00 PM)" },
  { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
  { value: "flexible", label: "Flexible" },
];
